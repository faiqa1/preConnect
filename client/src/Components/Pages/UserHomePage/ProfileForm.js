import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Avatar from 'react-avatar';
import AvatarEdit from 'react-avatar-edit';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileForm = () => {
    Modal.setAppElement('#root'); // Add this line at the start of your ProfileForm component

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
  const [preview, setPreview] = useState(null);
  const [src, setSrc] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const initialValues = {
    profilePic: '',
    name: '',
    headline: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    headline: Yup.string().required('Headline is required'),
  });

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 716800) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleProfileUpdate = () => {
    toast.success("Profile updated successfully!");
  };

  <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={customStyles}
  contentLabel="Profile Picture Modal"
>
  <h2>Choose Profile Photo</h2>
  <AvatarEdit
    width={390}
    height={295}
    onCrop={onCrop}
    onClose={onClose}
    onBeforeFileLoad={onBeforeFileLoad}
    src={src}
  />
  <button type="button" onClick={closeModal}>OK</button>
</Modal>

  return (
    <div className='form-wrapper flex mx-auto justify-center items-center
    bg-blue h-[15rem]  max-h-[15rem] md:max-h-[10rem] lg:max-h-[15rem] w-1/2 my-5 rounded-2xl'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          values.profilePic = preview;  // Set the cropped image as the profilePic value
          console.log(values);
          handleProfileUpdate();
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="profilePic" className='text-white'>Profile Picture</label>
              <button type="button" onClick={openModal} className='text-white'>Choose Profile Photo</button>
              {preview && <Avatar src={preview} size="100" round />}
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Profile Picture Modal"
              >
                <h2 className='text-white'>Choose Profile Photo</h2>
                <AvatarEdit
                  width={390}
                  height={295}
                  onCrop={onCrop}
                  onClose={onClose}
                  onBeforeFileLoad={onBeforeFileLoad}
                  src={src}
                />
                <button type="button" onClick={closeModal}>OK</button>
              </Modal>
            </div>
            <div>
              <label htmlFor="name" className='text-white'>Name</label>
              <Field id="name" name="name" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="headline" className='text-white'>Headline</label>
              <Field id="headline" name="headline" placeholder="Headline" />
            </div>
            <button type="submit" className='text-white'>Update Profile</button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default ProfileForm;
