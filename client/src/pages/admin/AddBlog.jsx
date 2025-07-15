import React, { useEffect, useRef, useState } from 'react';
import { assets, blogCategories } from '../../assets/assets';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import { parse } from 'marked';

const AddBlog = () => {
  const { axios } = useAppContext();
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [description, setDescription] = useState(''); // Add this state
  const [category, setCategory] = useState('Startup');
  const [isPublished, setIsPublished] = useState(false);

  const generateContent = async () => {
    if (!title) {
      toast.error('Please enter a title');
       return ;
    }

    try {
      setLoading(true);
      const { data } = await axios.post('/api/blog/generate', { prompt: title });

      if (data.success) {
        const htmlContent = parse(data.content);
        quillRef.current.root.innerHTML = htmlContent;
        setDescription(htmlContent); // Sync with state
      } else {
        toast.error(data.message || 'Failed to generate content');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!quillRef.current?.root.innerHTML.trim()) {
      toast.error('Please add blog content');
      return;
    }

    try {
      setIsAdding(true);
      const blog = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished
      };

      const formData = new FormData();
      formData.append('blog', JSON.stringify(blog));
      formData.append('image', image);

      const { data } = await axios.post("/api/blog/add", formData);

      if (data.success) {
        toast.success(data.message);
        // Reset form
        setImage(false);
        setTitle('');
        setSubTitle('');
        setDescription('');
        setCategory('Startup');
        setIsPublished(false);
        quillRef.current.root.innerHTML = '';
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || 'Failed to add blog');
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean']
          ]
        },
        placeholder: 'Write your blog content here...'
      });

      quillRef.current = quill;

      // Sync editor content with React state
      quill.on('text-change', () => {
        setDescription(quill.root.innerHTML);
      });
    }

    return () => {
      if (quillRef.current) {
        quillRef.current.off('text-change');
      }
    };
  }, []);

  return (
    <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
        <p>Upload thumbnail</p>
        <label htmlFor="image" className="cursor-pointer">
          <img 
            src={!image ? assets.upload_area : URL.createObjectURL(image)} 
            alt="upload icon"  
            className='mt-2 h-16 rounded'
          />
          <input 
            onChange={(e) => setImage(e.target.files[0])} 
            type="file" 
            id='image' 
            hidden 
            required 
            accept="image/*"
          />
        </label>

        <p className='mt-4'>Blog Title</p>
        <input 
          type="text" 
          placeholder='Type here' 
          required 
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' 
          onChange={e => setTitle(e.target.value)} 
          value={title}
        />

        <p className='mt-4'>Subtitle</p>
        <input 
          type="text" 
          placeholder='Type here' 
          required 
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' 
          onChange={e => setSubTitle(e.target.value)} 
          value={subTitle}
        />

        <p className='mt-4'>Blog Description</p>
        <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
          <div ref={editorRef} className="min-h-[200px] border border-gray-300 rounded"></div>
          
          {loading && (
            <div className='absolute inset-0 flex items-center justify-center bg-black/10 z-10'>
              <div className='w-8 h-8 rounded-full border-4 border-t-white border-primary animate-spin'></div>
            </div>
          )}
          
          <button 
            disabled={loading}
            type='button' 
            onClick={generateContent}
            className='absolute bottom-1 right-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer disabled:opacity-50'
          >
            Generate with AI
          </button>
        </div>

        <p className='mt-4'>Blog Category</p>
        <select 
          onChange={e => setCategory(e.target.value)} 
          value={category} 
          name="category" 
          className='mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded'
          required
        >
          <option value="">Select category</option>
          {blogCategories.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>

        <div className="flex items-center gap-2 mt-4">
          <input 
            type="checkbox" 
            id="publish"
            checked={isPublished} 
            className='scale-125 cursor-pointer' 
            onChange={e => setIsPublished(e.target.checked)}
          />
          <label htmlFor="publish" className="cursor-pointer">Publish Now</label>
        </div>

        <button 
          disabled={isAdding} 
          type='submit' 
          className='mt-8 w-40 h-10 bg-blue-800 text-white rounded cursor-pointer text-sm disabled:opacity-50'
        >
          {isAdding ? 'Adding...' : 'Add Blog'}
        </button>
      </div>
    </form>
  );
};

export default AddBlog;