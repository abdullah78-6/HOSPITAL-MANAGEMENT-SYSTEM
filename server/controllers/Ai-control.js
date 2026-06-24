import {GoogleGenerativeAI} from "@google/generative-ai"
const Airesult=async(req,res)=>{
    const {queries}=req.body;
    try {
      const genai=new GoogleGenerativeAI(process.env.GEMNI_API_KEY);
    const model=genai.getGenerativeModel({model:"gemini-3.5-flash"})
    const prompt=queries;
    const response=await model.generateContent(`
        Give a Ai response In just 3 to 4 lines 
        ${prompt}`);
    const airesult=response.response.text();
    console.log("AI RESULT",airesult);
    return res.json({status:true,result:airesult});
        
    } catch (error) {
        console.log("Ai error",error.message);
        return res.json({status:false,message:" Server Is Overload"});
        
    }
}
export {Airesult}