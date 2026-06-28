import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const prompt = String(body.prompt || "");

  const provider = process.env.AI_PROVIDER || "demo";
  const configured = Boolean(process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY || process.env.ANTHROPIC_API_KEY);

  if (!configured) {
    return NextResponse.json({
      provider,
      mode: "demo",
      answer: `Mode demo IA: ${prompt ? "analyse recue" : "aucune question"}. Branche une cle API pour activer les vraies reponses.`
    });
  }

  return NextResponse.json({
    provider,
    mode: "configured",
    answer: "Cle IA detectee. Le fournisseur reel sera branche dans la prochaine integration serveur."
  });
}
