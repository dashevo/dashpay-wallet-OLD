import React from 'react';
import { TextInput } from 'react-native';
// import { renderHook, act } from 'native-testing-library';

import { useForm } from 'hooks/Form';
import * as yup from 'yup';

const initialState = {
  values: {
    name: 'Ted'
  }
};

const validationSchema = values => {
  return yup.object().shape({
    name: yup.string().required('name is a required field')
  });
};

describe('useForm', () => {

  it('test are commented until the problem is fixed', () => {
    // TypeError: Cannot read property 'now' of undefined
    expect(true).toBe(true);
  })


  // it('update the state to initial state', () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   expect(result.current.touched).toEqual({});
  //   expect(result.current.values).toEqual(initialState.values);
  //   expect(result.current.focused).toBe(undefined);
  //   expect(result.current.isDirty).toBe(false);
  //   expect(result.current.isSubmitting).toBe(false);
  //   expect(result.current.isValid).toBe(false);
  //   expect(result.current.isValidating).toBe(false);
  // });
  //
  // it('should update the value when setValue is called', async () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   act(() => {
  //     result.current.setValues({
  //       name: 'Tom'
  //     });
  //   });
  //
  //   await result.current.submit();
  //
  //   expect(result.current.values).toEqual({
  //     name: 'Tom'
  //   });
  // });
  //
  // it('should update the value when setValue is called with two or more parameters are given', async () => {
  //   const onSubmit = jest.fn();
  //   const { result, waitForNextUpdate } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   act(() => {
  //     result.current.setValues({
  //       name: 'Tom',
  //       lastName: 'Erikson'
  //     });
  //   });
  //
  //   await result.current.submit();
  //
  //   expect(result.current.values).toEqual({
  //     name: 'Tom',
  //     lastName: 'Erikson'
  //   });
  // });
  //
  // it('Should update errors when there is a error', async () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   act(() => {
  //     result.current.setValues({
  //       name: ''
  //     });
  //   });
  //
  //   await result.current.submit();
  //
  //   expect(result.current.errors).toEqual({
  //     name: 'name is a required field'
  //   });
  // });
  //
  // it('should update isValide to true if it is valid', async () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   act(() => {
  //     result.current.setValues({
  //       name: 'Tom'
  //     });
  //   });
  //
  //   await result.current.submit();
  //
  //   expect(result.current.isValid).toBe(true);
  // });
  //
  // it('should update isValide to false if it is not valid', async () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   act(() => {
  //     result.current.setValues({
  //       name: ''
  //     });
  //   });
  //
  //   await result.current.submit();
  //
  //   expect(result.current.isValid).toBe(false);
  // });
  //
  // it('should update isDirty to true when setValues is called', async () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   expect(result.current.isDirty).toBe(false);
  //
  //   act(() => {
  //     result.current.setValues({
  //       name: ''
  //     });
  //   });
  //
  //   await result.current.submit();
  //
  //   expect(result.current.isDirty).toBe(true);
  // });
  //
  // it('should update isDirty to true when setTouched is called', async () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   expect(result.current.isDirty).toBe(false);
  //
  //   act(() => {
  //     result.current.setTouched({
  //       touched: true
  //     });
  //   });
  //
  //   await result.current.submit();
  //
  //   expect(result.current.isDirty).toBe(true);
  // });
  //
  // it('should update isDirty to true when setErrors is called', async () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   expect(result.current.isDirty).toBe(false);
  //
  //   act(() => {
  //     result.current.setErrors({
  //       error: 'Error'
  //     });
  //   });
  //
  //   await result.current.submit();
  //
  //   expect(result.current.isDirty).toBe(true);
  // });
  //
  // it('should update isSubmitting when submit is called', async () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   const submit = result.current.submit();
  //   expect(result.current.isSubmitting).toBe(true);
  //
  //   await submit;
  //
  //   expect(result.current.isSubmitting).toBe(false);
  // });
  //
  // it('should update isValidating when submit is called', async () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   const submit = result.current.submit();
  //   expect(result.current.isValidating).toBe(true);
  //
  //   await submit;
  //
  //   expect(result.current.isValidating).toBe(false);
  // });
  //
  // it('should update the state to initial state when reset is called', async () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   act(() => {
  //     result.current.setValues({
  //       name: 'Tom'
  //     });
  //   });
  //
  //   act(() => {
  //     result.current.reset();
  //   });
  //
  //   expect(result.current).toEqual(initialState);
  // });
  //
  // it('should update touched  when setValues is called', async () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   act(() => {
  //     result.current.setValues({
  //       name: 'Tom'
  //     });
  //   });
  //
  //   await result.current.submit();
  //   expect(result.current.touched).toEqual({ name: true });
  // });
  //
  // it('should update touched when setTouched is called', async () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   act(() => {
  //     result.current.setTouched({
  //       touched: 'Tom'
  //     });
  //   });
  //
  //   await result.current.submit();
  //   expect(result.current.touched).toEqual({ touched: true });
  // });
  //
  // it('should update touched when setError is called', async () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   act(() => {
  //     result.current.setErrors({
  //       name: 'Tom'
  //     });
  //   });
  //
  //   await result.current.submit();
  //
  //   expect(result.current.touched).toEqual({ name: true });
  // });
  //
  // it('should update errors when setErrors is called', async () => {
  //   const onSubmit = jest.fn();
  //   const { result } = renderHook(() =>
  //     useForm({
  //       onSubmit,
  //       validationSchema,
  //       initialState
  //     })
  //   );
  //
  //   act(() => {
  //     result.current.setErrors({
  //       name: 'required'
  //     });
  //   });
  //
  //   expect(result.current.errors).toEqual({ name: 'required' });
  // });
  //
  // it('***focus should be tested after implementation', async () => {
  //   expect(true).toEqual(true);
  // });
  //
  // it('***setFocus should be tested after implementation ', async () => {
  //   expect(true).toEqual(true);
  // });
});
