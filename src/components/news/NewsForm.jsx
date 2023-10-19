import Card from '../Card';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function NewsForm({ addNews }) {

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        image: Yup.string().url('Image URL must be a valid URL').required('Image URL is required'),
       
        description: Yup.string().required('Description is required'),
      });
      const  initialValues= {
        title: '',
        image: '',
      
        description: '',
      };

      const onSubmit = async (values) => {
        try {
          console.log("News added successfully");
          await addNews(values);
        } catch (error) {
          console.error("Form submission error:", error);
        }
      };

    const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit
   
    });
  
    
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-96 h-[80vh]">
          <form className="p-4" onSubmit={formik.handleSubmit}>
            <div className="mb-2">
              <label htmlFor="title" className="block font-bold mb-1">
                Event Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                className="w-full border rounded px-2 py-1"
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-red-600">{formik.errors.title}</div>
              ) : null}
            </div>
            <div className="mb-2">
              <label htmlFor="image" className="block font-bold mb-1">
                Event Poster URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
                className="w-full border rounded px-2 py-1"
              />
              {formik.touched.image && formik.errors.image ? (
                <div className="text-red-600">{formik.errors.image}</div>
              ) : null}
            </div>
           
            <div className="mb-2">
              <label htmlFor="description" className="block font-bold mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                className="w-full border rounded px-2 py-1"
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="text-red-600">{formik.errors.description}</div>
              ) : null}
            </div>
            <div className="mt-4 text-right">
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded font-bold cursor-pointer hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
              >
                Add Event
              </button>
            </div>
          </form>
        </Card>
      </div>
    );
  }
  

export default NewsForm;
