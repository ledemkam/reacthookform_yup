import * as yup from 'yup';

export const userSchema = yup.object({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').max(5, 'Name must not exceed 5 characters'),
  age: yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
  email: yup.string().email('Invalid email').required('Email is required'),
  website: yup.string().url('Invalid URL').required('Website is required'),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
  sex: yup.mixed().oneOf(["männlich", "weiblich", "divers"] as const).defined(),
  tel: yup.string().matches(/^(0 |\+33)[1-9]\d{8}$/, 'Invalid phone number').required('Phone number is required'),
  address: yup.object({
    street: yup.string().required('Street is required'),
    city: yup.string().required('City is required'),
    zip: yup.string().matches(/^[0-9]{5}$/, 'Invalid ZIP').required('ZIP is required')
  })
});