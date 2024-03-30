
import { setOutput, toggleIsLoading } from '@/redux/features/rewrite.slice';
import { WriteEntires } from '@/types/writer';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
export const reWriter = async (data: WriteEntires, dispatch: Dispatch,) => {


    const apiKey = 'Bearer sk-3ac00fd0c96645309f9751188740ab5a';
    const baseUrl = 'https://api.deepseek.com/v1/chat/completions';

    const response = await axios.post(
        baseUrl,
        {
            model: 'deepseek-chat',
            messages: [
                {
                    role: 'user',
                    content: `Paraphrase about text below ${data.length}${data.tone}${data.creativity}${data.viewPoint} to ${data.language},a respond with paraphrased text only : 
                    ${data.input} 
            
            `,
                },
            ],
        },
        {
            headers: {
                Authorization: apiKey,
            },
        },
    );
    dispatch(setOutput(response.data.choices[0].message.content));
    dispatch(toggleIsLoading())


};
