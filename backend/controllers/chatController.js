// Load environment variables
import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env["OPENAI_API_KEY"],
});

export const chat = async (req, res) => {
	const { personal_info, symptoms } = req.body;
	if (!personal_info || !symptoms) {
		return res.status(400).json({
			error: "Missing required fields",
		});
	}
	const chatCompletion = await openai.chat.completions.create({
		messages: [
			{
				role: "system",
				content:
					"You are a medical symptoms  analyzer, here to help people understand there medical problems before meeting a doctor",
			},
			{
				role: "user",
				content:
					"Personal info: " + personal_info + "\nIssue: " + symptoms,
			},
		],
		model: "gpt-4",
	});

	const reply = chatCompletion.choices[0].message.content;

	return res.status(200).json({
		message: reply,
	});
};
