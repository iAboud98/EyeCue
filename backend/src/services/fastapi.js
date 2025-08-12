import axios from 'axios';  // -> import axios library

export async function processFrame(frame) {
    try {
        const response = await axios.post(
            `${process.env.FASTAPI_URL}/analyze`, 
            {frame},
            {timeout: 5000} 
        );

        return response.data; 
    
    } catch (error) {  
        console.error('Error sending frame to FastAPI:', error.message);
        
        throw error;
    }
}