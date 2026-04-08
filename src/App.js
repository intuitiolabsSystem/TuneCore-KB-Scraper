import { useState, useRef, useEffect } from "react";

// ─── TuneCore Knowledge Base context ────────────────────────────────────────
// Built by Intuitio Labs · Knowledge Base sourced from Notion
// Notion DB: collection://edc42fb0-fa4b-43f9-b96c-1193de02318f
// ─────────────────────────────────────────────────────────────────────────────

const PROJECT_CONTEXT = `
You are the TuneCore Support Assistant — a knowledgeable, clear, and helpful guide built by Intuitio Labs for TuneCore artists, songwriters, and labels.

Your job is to answer questions about TuneCore's services accurately and helpfully. You have access to TuneCore's official Knowledge Base stored in Notion. Use the Notion tools to search and fetch relevant articles before answering every question.

HOW TO USE THE KNOWLEDGE BASE:
1. Use the Notion search tool to search the Knowledge Base with data_source_url: "collection://edc42fb0-fa4b-43f9-b96c-1193de02318f" and a relevant query keyword.
2. From the results, identify the most relevant article(s).
3. Use the Notion fetch tool on each article URL to retrieve its full content.
4. Answer the user's question based on the article content. Cite the article title when relevant.
5. If no article matches, use your general knowledge about TuneCore and note that the user should verify at support.tunecore.com.

Your tone is: friendly, clear, and professional. Avoid jargon unless explaining music industry terms (in which case, explain them). Always be specific and accurate. Never guess on royalty rates or policies — always search the KB first.

If something is not in the Knowledge Base, say so clearly and direct the user to support.tunecore.com.

CONTACT: For issues not resolved here, visit https://support.tunecore.com or open a ticket with TuneCore's support team directly.


== WHO IS TUNECORE ==

TuneCore is a music distribution and publishing administration company that empowers independent artists, bands, and labels to distribute music globally, collect royalties, and build their careers — all while retaining full ownership and control of their music.

Founded in 2005, TuneCore is one of the world's leading digital music distribution services and has paid out billions of dollars in royalties to independent artists.


== TUNECORE'S CORE SERVICES ==

1. MUSIC DISTRIBUTION
TuneCore distributes music to 150+ stores and streaming platforms worldwide, including Spotify, Apple Music, Amazon Music, YouTube Music, Tidal, Deezer, TikTok, Instagram/Facebook, Pandora, iHeartRadio, Napster, Gaana, Qobuz, Douyin, and many more.
- Artists keep 100% of their sales revenue. TuneCore charges a flat annual distribution fee per release — not a royalty cut.
- Artists retain full ownership and copyright of their music at all times.
- TuneCore distributes Singles, EPs, and full Albums. Ringtones are also supported.
- Cover art requirements: square format, JPG or PNG, RGB color mode, minimum 1400×1400px, maximum 3000×3000px, no explicit content visible in artwork unless marked.

2. PUBLISHING ADMINISTRATION
TuneCore Publishing Administration helps songwriters/composers collect publishing royalties that their PRO (Performing Rights Organization) may not be fully collecting — including:
- Mechanical royalties (from streaming and downloads)
- Foreign performance royalties (from international PROs)
- Synchronization royalties (Film & TV licensing)
TuneCore Publishing Administration requires exclusive administration rights for the compositions you register. It does NOT affect your copyright ownership.
Cost: TuneCore charges a commission on collected royalties. For synchronization licenses, the commission is 15%. Other royalty types have their own commission structures — check the KB for current rates.
TuneCore Publishing will pitch compositions for Film & TV sync opportunities.

3. YOUTUBE CONTENT ID
TuneCore can register your sound recordings with YouTube Content ID, allowing you to earn revenue when your music is used in YouTube videos — even videos you didn't upload.
- Revenue varies by viewer territory, ad format, viewer device, and user experience.
- Not all views will generate revenue (YouTube does not place ads on every view).
- Artists can choose to monetize, block, or track videos that use their recordings.
- Artists can opt out of YouTube monetization even while using TuneCore Publishing Administration.


== KEY FACTS & POLICIES ==

COPYRIGHT:
- Your music is automatically copyrighted the moment it is created in a fixed medium (written down or recorded).
- Registration with the U.S. Copyright Office (copyright.gov) is NOT required before distributing via TuneCore, but is strongly recommended — registration creates a public record and enables lawsuits for monetary damages.

RELEASE TYPES:
- Single: 1–3 tracks (1–2 tracks is standard; 3 tracks if the total runtime is under 10 minutes and no track exceeds 10 minutes).
- EP: 4–6 tracks OR 1–3 tracks with total runtime between 10–30 minutes.
- Album: 7+ tracks OR 6+ tracks with total runtime over 30 minutes.
- Long singles (a single track longer than 10 minutes) can be distributed.

ISRC & UPC:
- TuneCore automatically provides UPC (barcode for the release) and ISRC codes (identifier for each track) at no extra charge.
- Artists can supply their own UPC/ISRC if they already have them.

PRICING IN STORES:
- TuneCore sets standard pricing in stores. Artists can request different pricing tiers in some cases.
- Pricing in international stores may vary due to exchange rates and store policies.

PRE-ORDERS:
- TuneCore supports iTunes/Apple Music pre-orders. The release must be submitted at least 7 days before the pre-order start date.
- Benefits: builds anticipation, generates early sales, day-of-release sales count toward chart eligibility.

EXPLICIT CONTENT:
- Tracks must be marked as Explicit or Clean accurately.
- Explicit: contains profanity, explicit sexual content, or extreme violence.
- Clean: radio-edit version of an explicit track.

CHANGES AFTER DISTRIBUTION:
- Some metadata changes (artist name, track order, track count) cannot be made after a release is live in stores.
- Changes that ARE allowed: price, title corrections (minor), adding/removing stores, updating assets.

RENEWALS:
- TuneCore distribution is on an annual subscription basis. Artists must renew each release annually to keep it in stores.
- Failure to renew results in the release being removed from stores.

REFUNDS:
- TuneCore has a refund policy — check the KB for current terms, as policies vary by situation.

ACCOUNT MANAGEMENT:
- Two-Factor Authentication (2FA) is supported.
- Artists can update contact information, reset passwords, and manage payment methods in their account settings.
- Account deletion: TuneCore supports soft deletes — data retained per their data policies.

REPORTING & PAYMENTS:
- TuneCore provides Trends & Analytics reports in the dashboard.
- Payments are made after stores report sales — timing varies by store (typically monthly, with a reporting delay of 2–3 months).
- TuneCore requires tax information (W-9 for US artists, W-8BEN for international) for payment processing.

SPECIAL POLICIES:
- TuneCore does NOT distribute audiobooks.
- TuneCore does NOT offer CD/DVD replication or poster manufacturing.
- TuneCore DOES report to Luminate (formerly Nielsen Soundscan).
- Cover songs require a mechanical license — TuneCore offers cover song licensing powered by Royalty Solutions.
- Chinese text in metadata cannot be distributed to certain stores.
- Hebrew language releases cannot be distributed to iTunes.
- Peloton Music: TuneCore has a specific distribution relationship with Peloton.


== COMMON QUESTIONS ==

Q: Do I keep 100% of my royalties?
A: Yes — TuneCore charges a flat annual fee for distribution, not a percentage of your royalties. You keep 100% of revenue from music sales and streams through TuneCore Distribution. (Note: TuneCore Publishing Administration does take a commission on royalties collected through that separate service.)

Q: What is the difference between a Performer and a Songwriter?
A: A Performer (recording artist) earns money from sales/streams of the sound recording. A Songwriter/Composer earns publishing royalties from the underlying composition — the melody and lyrics. The same person can be both, but the royalty streams are separate and collected differently.

Q: What is SoundExchange?
A: SoundExchange is a U.S. non-profit that collects and distributes digital performance royalties for sound recordings — specifically from non-interactive digital radio (like Pandora, SiriusXM). These are separate from the publishing royalties collected by PROs.

Q: What is a PRO?
A: A Performing Rights Organization (PRO) — such as ASCAP, BMI, SESAC in the U.S., or PRS, SOCAN, APRA internationally — collects public performance royalties for songwriters when music is played on radio, TV, in businesses, or streamed. TuneCore Publishing Administration works alongside your PRO to collect royalties your PRO may miss.

Q: What is a CAE/IPI Number?
A: A CAE (Composer, Author, Publisher) number — now called an IPI (Interested Parties Information) number — is a unique identifier assigned to songwriters and publishers by PROs worldwide. It is used to track and route royalty payments.

Q: Will TuneCore pitch my music for Film & TV sync?
A: Yes, TuneCore Publishing Administration includes pitching your compositions for Film & TV placement opportunities. The commission on sync licenses is 15%.

Q: Can I distribute cover songs?
A: Yes, but you need a mechanical license for the composition. TuneCore offers Cover Song Licensing powered by Royalty Solutions to handle this.

Q: Can I set territory restrictions?
A: Yes — TuneCore allows artists to restrict distribution to specific territories/countries.

Q: What is the Store Automator?
A: TuneCore's Store Automator automatically adds new music stores to your existing releases as TuneCore expands its distribution network.

Q: Can I monetize my music on YouTube if I don't have a YouTube channel?
A: Yes — through YouTube Content ID, TuneCore can monetize your sound recordings on YouTube even if you don't have your own channel.
`;

const SUGGESTED_QUESTIONS = [
  "How do I distribute my music with TuneCore?",
  "Do I keep 100% of my royalties?",
  "What's the difference between a Single, EP, and Album?",
  "How does TuneCore Publishing Administration work?",
  "When do I get paid?",
  "What are TuneCore's cover art requirements?",
  "How does YouTube Content ID work?",
  "Can I distribute cover songs?",
];

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Welcome to the TuneCore Support Assistant. I have access to TuneCore's official Knowledge Base and can answer your questions about music distribution, publishing administration, YouTube Content ID, royalties, releases, and more. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1500,
          system: PROJECT_CONTEXT,
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
          mcp_servers: [
            {
              type: "url",
              url: "https://mcp.notion.com/mcp",
              name: "notion-mcp",
            },
          ],
        }),
      });

      const data = await res.json();

      // Extract text blocks from response (MCP tool results are handled server-side)
      const reply =
        data.content
          ?.filter((item) => item.type === "text")
          .map((item) => item.text)
          .join("\n") || "I couldn't process that. Please try again.";

      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Connection error. Please try again." },
      ]);
    }
    setLoading(false);
  };

  const showSuggestions = messages.length === 1;

  return (
    <div
      style={{
        fontFamily:
          "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: "#1a1919",
        height: "100vh",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        color: "#e8e4dc",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          flexShrink: 0,
          borderBottom: "1px solid #2a2820",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          background: "#0d0d0a",
        }}
      >
        <img src="/intuitio_logo_white.svg" height="28px" alt="Intuitio Labs" />
        <div style={{ width: "1px", height: "28px", background: "#2a2820", marginLeft: "4px" }} />
        <div>
          <div
            style={{
              fontSize: "15px",
              fontWeight: "600",
              fontFamily: '"Neue Haas Grotesk", Helvetica, Arial, sans-serif',
              letterSpacing: "0.04em",
              color: "#ffffff",
            }}
          >
            TuneCore Support Assistant
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "#7a7468",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
              fontFamily:
                "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            IntuitioLabs · TuneCore Knowledge Base
          </div>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <div
            style={{
              fontSize: "11px",
              color: "#c9a84c",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "1px solid #3a3420",
              padding: "4px 10px",
              borderRadius: "2px",
            }}
          >
            Support
          </div>
        </div>
      </div>

      {/* ── Chat messages (scrollable) ── */}
      <div
        className="chat-shell"
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          padding: "24px 32px 16px",
          maxWidth: "780px",
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
          background: "#1a1919",
          borderLeft: "1px solid #262626",
          borderRight: "1px solid #262626",
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              marginBottom: "28px",
              display: "flex",
              flexDirection: "column",
              alignItems: m.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            {m.role === "assistant" && (
              <div
                style={{
                  fontSize: "10px",
                  color: "#c9a84c",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  paddingLeft: "2px",
                }}
              >
                TuneCore Support
              </div>
            )}
            <div
              style={{
                maxWidth: "88%",
                padding: m.role === "user" ? "12px 18px" : "20px 24px",
                background:
                  m.role === "user"
                    ? "linear-gradient(135deg, #1e1c14, #2a2618)"
                    : "#111108",
                border:
                  m.role === "user"
                    ? "1px solid #3a3420"
                    : "1px solid #1e1c14",
                borderRadius:
                  m.role === "user"
                    ? "12px 12px 2px 12px"
                    : "2px 12px 12px 12px",
                fontSize: "15px",
                lineHeight: "1.75",
                color: m.role === "user" ? "#d4cfc4" : "#e0dbd0",
                whiteSpace: "pre-wrap",
              }}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#7a7468",
              fontSize: "13px",
              paddingLeft: "2px",
            }}
          >
            <div style={{ display: "flex", gap: "4px" }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: "5px",
                    height: "5px",
                    background: "#c9a84c",
                    borderRadius: "50%",
                    animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                    opacity: 0.6,
                  }}
                />
              ))}
            </div>
            Searching Knowledge Base...
          </div>
        )}

        {showSuggestions && !loading && (
          <div style={{ marginTop: "8px" }}>
            <div
              style={{
                fontSize: "11px",
                color: "#5a5650",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Common questions
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(q)}
                  style={{
                    background: "transparent",
                    border: "1px solid #2a2820",
                    borderRadius: "20px",
                    padding: "7px 16px",
                    fontSize: "13px",
                    color: "#a09890",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "#c9a84c";
                    e.target.style.color = "#c9a84c";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "#2a2820";
                    e.target.style.color = "#a09890";
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* ── Input (fixed at bottom) ── */}
      <div
        style={{
          flexShrink: 0,
          borderTop: "1px solid #1e1c14",
          padding: "20px 32px",
          background: "#0d0d0a",
          maxWidth: "780px",
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", gap: "12px", alignItems: "flex-end" }}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Ask about distribution, royalties, publishing, YouTube Content ID..."
            rows={1}
            style={{
              flex: 1,
              background: "#111108",
              border: "1px solid #2a2820",
              borderRadius: "8px",
              padding: "12px 16px",
              fontSize: "14px",
              color: "#e8e4dc",
              fontFamily: "inherit",
              resize: "none",
              outline: "none",
              lineHeight: "1.5",
              maxHeight: "120px",
              overflow: "auto",
              transition: "border-color 0.15s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
            onBlur={(e) => (e.target.style.borderColor = "#2a2820")}
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            style={{
              background:
                input.trim() && !loading
                  ? "linear-gradient(135deg, #c9a84c, #a8881c)"
                  : "#1e1c14",
              border: "none",
              borderRadius: "8px",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: input.trim() && !loading ? "pointer" : "not-allowed",
              transition: "all 0.15s ease",
              flexShrink: 0,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke={input.trim() && !loading ? "#0a0a08" : "#3a3830"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        <div
          style={{
            marginTop: "10px",
            fontSize: "11px",
            color: "#3a3830",
            textAlign: "center",
            letterSpacing: "0.05em",
          }}
        >
          This assistant has access to TuneCore's official Knowledge Base · For
          further support visit{" "}
          <span style={{ color: "#5a5650" }}>support.tunecore.com</span>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        textarea::placeholder { color: #3a3830; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #2a2820; border-radius: 2px; }

        @media (max-width: 640px) {
          .chat-shell {
            padding: 20px 16px;
            border-left: none;
            border-right: none;
          }
        }
      `}</style>
    </div>
  );
}
