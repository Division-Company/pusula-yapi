import React from 'react';
import { useFormikContext } from 'formik';

function SubmitButton() {
  const { isSubmitting, isValid } = useFormikContext(); 

  return (
    <button
      type="submit"
      className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={isSubmitting || !isValid}
    >
      {isSubmitting ? 'Gönderiliyor...' : 'Başvur'}
    </button>
  );
}

export default SubmitButton;
