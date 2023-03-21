import React from 'react';
import { FormContainer } from '../../auth/register/RegisterFormStyled';
import { CreateTranslationForm } from './TranslationFormStyled';

export const TranslationForm = () => {
  return (
    <div>
      <FormContainer>
        <CreateTranslationForm>
          <div className="inputs-container">
            <div className="input-container">
              <label htmlFor="date" placeholder=" ">
                Due date:
              </label>
              <input
                className="input-box"
                id="date"
                type="date"
                name="date"
                required
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor="phone">Number of words:</label>
              <input
                className="input-box"
                id="words"
                type="number"
                name="words"
                required
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor="source"> Source:</label>
              <select className="input-box" name="source" id="source">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="input-container">
              <label htmlFor="target">Target:</label>
              <select className="input-box" name="target" id="target">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="input-container">
              <label htmlFor="languages">Translator:</label>
              <select className="input-box" name="target" id="target">
                <option>Sandra</option>
                <option>Paolo</option>
                <option>Clari</option>
              </select>
            </div>
            <div className="input-container">
              <label className="input-file__label" htmlFor="upload">
                Upload translation
              </label>
              <input
                className="input-file-box"
                id="upload"
                type="file"
                name="upload"
                accept=".pdf"
                style={{ visibility: 'hidden' }}
                required
              ></input>
            </div>
          </div>
        </CreateTranslationForm>
      </FormContainer>
    </div>
  );
};
