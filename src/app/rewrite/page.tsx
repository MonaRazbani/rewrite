'use client';

import {
  setMode,
  toggelShowHistories,
  toggleIsLoading,
} from '@/redux/features/rewrite.slice';
import { reWriter } from '@/utils';
import { LoadingOutlined } from '@ant-design/icons';
import { Form, Input, Switch } from 'antd';
import { useEffect, useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { TbHistory, TbWriting } from 'react-icons/tb';
import { useAppDispatch, useAppSelector } from '../(hooks)/redux';
import Histories from './histories';
import SelectCreativity from './selectCreativity';
import SelectEngine from './selectEngine';
import SelectLanguage from './selectLanguage';
import SelectLength from './selectLength';
import SelectTone from './selectTone';
import SelectViewPoint from './selectViewPoint';
function Page() {
  const {
    lenght,
    viewPoint,
    tone,
    creativity,
    selectedLanguage,
    output,
    isLoading,
    mode,
    showHistories,
  } = useAppSelector((store) => store.RewriteSlice);
  const [charCount, setCharCount] = useState('0');
  const [form] = Form.useForm();
  const inputValue = Form.useWatch('input', form);
  const reply = Form.useWatch('reply', form);

  const dispatch = useAppDispatch();

  const handleWrite = () => {
    dispatch(toggleIsLoading());
    reWriter(
      {
        input: inputValue,
        reply: reply,
        tone: tone,
        creativity: creativity,
        viewPoint: viewPoint,
        length: lenght,
        language: selectedLanguage ?? 'English',
      },
      dispatch,
    );
  };

  const handleSwitch = (checked: boolean) => {
    let mode = checked ? 'advance' : 'simple';
    dispatch(setMode(mode));
  };

  useEffect(() => {
    form.resetFields();
  }, [mode]);
  return (
    <>
      <div className="w-full h-16 flex flex-row justify-between justify-items-center content-center flex-wrap border-b-[1px] border-gray-200 my-auto px-9">
        <IoIosMenu size={24} color="#747474" className="my-auto" />
        <button
          className="flex flex-row content-center justify-center flex-wrap gap-3 border-[1px] rounded-lg border-gray-200 w-28 h-10"
          onClick={() => dispatch(toggelShowHistories())}
        >
          <TbHistory size={20} color="#747474" className="mt-1" />
          <text className=" text-[#747474] text-base font-normal">History</text>
        </button>
      </div>

      <div className="flex flex-row  ">
        <div className="flex flex-col h-screen gap-4 w-4/12 mx-auto pt-4 px-4">
          <div className=" flex flex-row gap-3 ">
            <TbWriting size={27} />
            <text className="text-left text-2xl font-medium "> ReWrite</text>
          </div>
          <text className="text-sm font-medium ">Target Text</text>
          <div className=" flex gap-5 flex-col">
            <Form form={form}>
              <Form.Item name={'input'}>
                <Input.TextArea
                  style={{
                    backgroundColor: '#F8F8F8',
                    borderRadius: '10px',
                    paddingTop: '12px',
                  }}
                  placeholder="paste your text that you wish to rewrite or improve ...  "
                  variant="filled"
                  rows={15}
                  onChange={(e) => {
                    setCharCount(e.target.value?.length.toString());
                  }}
                  maxLength={200}
                />
              </Form.Item>
              <div
                style={{ marginTop: '5px', color: '#747474', fontSize: '12px' }}
              >
                {charCount}/200
              </div>
            </Form>

            <SelectLanguage />

            <div className="flex flex-row gap-3">
              <Switch
                style={{
                  backgroundColor: mode === 'advance' ? '#9373EE' : '#EFEFEF',
                }}
                value={mode === 'advance' ? true : false}
                onChange={handleSwitch}
              />
              <div className="flex flex-col justify-items-start">
                <text className="text-base font-medium">Advanced</text>
                <text className="text-gray-500 text-base font-medium">
                  More access for more accurate results
                </text>
              </div>
            </div>
            <div className="" hidden={mode !== 'advance' ? true : false}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-3">
                  <SelectLength />
                  <SelectTone />
                </div>
                <div className="flex flex-row gap-3">
                  <SelectViewPoint />
                  <SelectCreativity />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <SelectEngine />
              <div className="m-3 w-6/12 pt-3">
                <button
                  className={`${
                    inputValue === '' ? 'bg-violet-300' : 'bg-violet-500'
                  } rounded-lg py-3 px-3  text-white w-full `}
                  disabled={inputValue === '' ? true : false}
                  onClick={handleWrite}
                >
                  {isLoading && <LoadingOutlined />} ReWrite
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            showHistories ? 'w-5/12 ' : 'w-8/12 '
          }mx-auto flex flex-row`}
        >
          <div className=" flex flex-col gap-3 w-full">
            <Input.TextArea
              disabled={output === '' ? true : false}
              style={{
                height: '90vh',
                border: '0px',
                borderRadius: '0px',
                backgroundColor: 'white',
              }}
              value={output}
            />
          </div>
        </div>
        <div className="w-3/12" hidden={!showHistories}>
          <Histories />
        </div>
      </div>
    </>
  );
}

export default Page;
