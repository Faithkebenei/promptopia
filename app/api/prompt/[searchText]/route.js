// import { connectToDB } from "@utils/database";
// import Prompt from "@models/prompt";

// export const GET = async (request, {params}) => {
//     try {
//         await connectToDB();

//         const prompt = await Prompt.find(params.searchText).populate('creator');


//     } catch (error) {
//         return new Response("Failed to fetch prompts", {status: 500})
//     }
// }