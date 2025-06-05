import { useState, useEffect, useRef } from "react";
import { Mail, Phone, FileUser, FileCode, PanelTop } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "./index.css";
function App() {
  const [count, setCount] = useState(0);
  const [handleMessage, sethandleMessage] = useState(false);

  return (
    <div className="w-full relative bg-white">
      <div
        className="absolute top-[-40px] right-2 hidden md:block "
        onMouseEnter={() => sethandleMessage(true)}
        onMouseLeave={() => sethandleMessage(false)}
      >
        <Visitors className="hidden md:block" />
      </div>{" "}
      {handleMessage && (
        <div className="absolute top-[-10px] right-4 text-xs">
          Monthly unique visitors
        </div>
      )}
      <div className="mt-12">
        <div className="flex justify-center items-center">
          <img
            src="image.jpeg"
            alt="my_img"
            width={350}
            className="hidden md:block rounded-3xl" // Key classes are here
          />{" "}
          <div className="hidden md:block ml-12 flex text-left ">
            <div className="flex flex-col text-2xl">
              <div className="mb-4">
                Hi, My name is <span className="font-bold">Samuel</span>.
              </div>
              <h className="mb-4">Thank you for visiting my website!</h>
              <h className="mb"> I hope you like my works 😁</h>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src="image.jpeg"
              alt="my_img"
              width={350}
              className="rounded-3xl md:hidden" // Key classes are here
            />
            <div className="md:hidden mt-12 flex items-center text-left ">
              <div className="flex flex-col text-2xl">
                <div className="mb-4">
                  Hi, My name is <span className="font-bold">Samuel</span>.
                </div>
                <h className="mb-4">Thank you for visiting my website!</h>
                <h className="mb"> I hope you like my works 😁</h>
              </div>
            </div>
            <div className="flex justify-center md:hidden">
              <div className="mt-12 max-w-[120px] flex justify-center md:hidden">
                <Visitors className="md:hidden" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:ml-24 mx-4">
          <div className="md:max-w-6xl shadow-xl p-8 rounded-2xl border mt-[200px] mb-20">
            <div className="md:ml-8  text-center text-4xl font-bold">
              Bidangil
            </div>
            <div className="md:hidden ml-2 mt-12 text-[15px]">
              It is a Proxy purchase company I own. Through this business,{" "}
              <span className="font-bold">I generated $5,000 in revenue</span>{" "}
              in last 3 months.
            </div>

            <div className="md:block hidden ml-12 mt-4 text-lg">
              <span className="text-3xl">· </span> It is a Proxy purchase
              company I own. Through this business,{" "}
              <span className="font-bold">I generated $5,000 in revenue</span>{" "}
              in last 3 months.
            </div>

            <div className="hidden md:block ml-12 mt-4 text-lg">
              <span className="text-3xl">· </span>
              Beyond providing a solution for shoppers, I also streamlined
              operations{" "}
              <span className="font-bold">for administrative staff.</span> By
              leveraging Signals, Celery workers, and overriding save_formset(),
              I <span className="font-bold">automated key workflows,</span>{" "}
              including sending SMS/email notifications, processing webhooks,
              and alerting admins to pending tasks and more.
            </div>
            <div className="hidden md:block ml-12 mt-4 text-lg">
              <span className="text-3xl">· </span> Recognizing that niche
              interests often foster strong communities, I developed{" "}
              <span className="font-bold">
                an integrated community platform
              </span>
              . Users can generate personalized avatars through a personality
              test, and engage by liking others' posts and avatars.
            </div>
            <div className="hidden md:block ml-12 mt-12 text-lg">
              <span className="text-sm">📍 </span> Technical details and my
              solutions are explained in documents and the source code! Please
              feel free to explore them.
            </div>
            <div className="flex mt-16 flex-col p-4 border border-1 max-w-md rounded-xl">
              <a
                href="https://github.com/after2842/bidangil_back"
                target="_blank"
                className="flex hover:text-blue-500"
              >
                <div className="flex">
                  <FaGithub size={24} className=" ml-12 mr-2" />
                  Github<span className="text-[8px] mt-1 ml-1"> (server)</span>
                </div>
              </a>
              <a
                href="https://github.com/after2842/bidangil_front"
                target="_blank"
                className="flex hover:text-blue-400 mt-4"
              >
                <div className="flex hover:text-blue-400">
                  <FaGithub size={24} className=" ml-12 mr-2 text-gray-500 " />
                  Github<span className="text-[8px] mt-1 ml-1"> (client)</span>
                </div>
              </a>
              <div className="flex flex-row">
                <a
                  href="https://docs.google.com/document/d/1tl2UWSDWMGkDmoTsS4Bes70XB5ID-xrhlEdSmAxvDlY/edit?usp=sharing"
                  target="_blank"
                  className="flex hover:text-blue-500"
                >
                  <FileCode className="ml-12 mr-2 mt-4" />{" "}
                  <div className="mt-4">Document</div>
                </a>
              </div>
              <div className="flex flex-row ">
                <a
                  href="https://www.bidangil.co/en"
                  target="_blank"
                  className="flex hover:text-blue-500"
                >
                  <PanelTop className="ml-12 mr-2 mt-4" />
                  <div className="mt-4">Go to the website</div>
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-6xl shadow-xl p-8 rounded-2xl border mb-20">
            <div className="flex md:ml-8 justify-center  md:justify-left text-2xl font-bold">
              {" "}
              <a
                href="https://www.cancer.gov/"
                target="_blank"
                className="flex hover:text-blue-500 underline"
              >
                NCI
              </a>
              &nbsp;Based Custum LLM
            </div>
            <div className="md:block hidden ml-12 mt-4 text-lg">
              <span className="text-3xl">· </span>People need an AI that{" "}
              <span className="font-bold">
                doen't leak their private information
              </span>
              . I led the charge to build just that, customizing a Llama 3.0 8B
              model to become a cancer information expert, all while keeping
              client data safely on their side.
            </div>
            <div className=" md:block hidden ml-12 mt-4 text-lg">
              <span className="text-3xl">· </span>Retrieval-Augmented Generation
              <span className="font-bold">(RAG)</span> provides related
              information to the model. It answers based on the pre-trained
              knowledge and the given text from NCI.
            </div>
            <div className="md:block hidden ml-12 mt-4 text-lg">
              <span className="text-3xl">· </span>Parameter-Efficient
              Fine-Tuning (PEFT). The dataset over 30,000 question-answer{" "}
              <span className="font-bold">adjust the bias and weights</span>{" "}
              about 1% of the parameters. It ensures the model answer based on
              the RAG, avoid sensitive questions, and know how to handle
              off-topic or tricky questions.
            </div>
            <div className=" md:block hidden ml-12 mt-4 text-lg">
              <span className="text-3xl">· </span>A key
              <span className="font-bold"> challenge was leading a team</span>.
              Motivating and coordinating individuals without financial
              incentives enhanced my soft skills and leadership abilities,
              invaluable experience.
            </div>
            <div className="md:block hidden ml-12 mt-12 text-lg">
              📍 The source code is not allowed to reveal. However, the document
              I wrote for this project is provided!
            </div>
            <a
              href="https://docs.google.com/document/d/18E5CwV8PMFa7h0onYFTWouM4E6A36rauNDKHpZFq3Jk/edit?usp=sharing"
              target="_blank"
              className="flex hover:text-blue-500"
            >
              <div className="md:block hidden ml-12 mt-4 text-lg">
                📍 This project failed. However, please check out the problems
                and how I solved!
              </div>
              <div className="md:hidden ml-2 mt-12 text-[15px]">
                This project{" "}
                <span className="font-bold">
                  builds a custom cancer specialized local AI
                </span>{" "}
                with Llama 3.0 8B. However,{" "}
                <span className="font-bold">it faild</span>. Please check out
                the document!
              </div>
            </a>

            <div className="flex mt-16 flex-col p-4 border max-w-md rounded-xl">
              <div className="flex flex-row">
                <a
                  href="https://docs.google.com/document/d/1sj5MaGnDLIzY0_8KT0IL0ZVg56Pli3x469SaO02Zsj4/edit?usp=sharing"
                  target="_blank"
                  className="flex hover:text-blue-500"
                >
                  <FileCode className="ml-12 mr-2 mt-4" />{" "}
                  <div className="mt-4">Document</div>
                  <span className="text-[8px] mt-5 ml-1"> (overview)</span>
                </a>
              </div>
              <div className="flex flex-row">
                <a
                  href="https://docs.google.com/document/d/18E5CwV8PMFa7h0onYFTWouM4E6A36rauNDKHpZFq3Jk/edit?usp=sharing"
                  target="_blank"
                  className="flex hover:text-blue-500"
                >
                  <FileCode className="ml-12 mr-2 mt-4" />{" "}
                  <div className="mt-4">Document</div>
                  <span className="text-[8px] mt-5 ml-1"> (review)</span>
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-6xl shadow-xl p-8 rounded-2xl border">
            <div className="md:ml-8 flex justify-center md:justify-left text-2xl font-bold">
              Middleware Api Server
            </div>
            <div className="md:hidden ml-2 mt-12 text-[15px]">
              A wig company with 80,000 variants wanted to open their Shopify
              store. I{" "}
              <span className="font-bold">synchronized the offline admins</span>{" "}
              with the Shopify admins.
            </div>
            <div className="hidden md:block ml-12 mt-4 text-lg">
              <span className="text-3xl">· </span> &nbsp;
              <span
                className="hover:text-blue-500 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.hisandher.com/?srsltid=AfmBOoqqS0QS_G0KAzQCYdP0C4_r7YOCcSrpI-nhn9m3XK5nK4PKjeUE",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                A wig company{" "}
              </span>
              with more than 80,000 variants wanted to open their Shopify store.
              This project{" "}
              <span className="font-bold">
                synchronizes their offline store admins
              </span>{" "}
              with the Shopify.
            </div>
            <div className="hidden md:block ml-12 mt-4 text-lg">
              <span className="text-3xl">· </span>This system automates data
              flow, ensuring consistency across both platforms by handling
              product imports, new orders, order refunds, product returns, and
              inventory quantity adjustments.
            </div>

            <div className="hidden md:block ml-12 mt-4 text-lg">
              <span className="text-3xl">· </span>I had to explore Shopify's api
              docs more than my textbook.
            </div>
            <div className="hidden md:block ml-12 mt-12 text-lg">
              📍 Unfortunately the source code is not allowed to reveal.
              However, the document I wrote for this project is below!
            </div>
            <div className="">
              <div className="flex mt-16 flex-col p-4 border max-w-md rounded-xl">
                <div className="flex flex-row">
                  <a
                    href="https://docs.google.com/document/d/1VU3HqMBB8EhpG-fJJ2C2bpNgtL616EChp-wIZbWtaaM/edit?usp=sharing"
                    target="_blank"
                    className="flex hover:text-blue-500"
                  >
                    <FileCode className="ml-12 mr-2 mt-3" />{" "}
                    <div className="mt-3">Document</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full bg-black mt-20 text-white flex justify-center p-8 ">
        <a
          href="Resume_Samuel_Choi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FileUser className="md:mx-24 mx-12" size={35} />
        </a>
        <a href="tel:9492997512" className="hover:text-blue-500">
          <Phone className="md:mx-24 mx-12" size={35} />
        </a>
        <a href="mailto:samuc11@uci.edu" className="hover:text-blue-500">
          <Mail className="md:mx-24 mx-12" size={35} />
        </a>
      </div>
    </div>
  );
}
function Visitors() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(null);
  const [visitorInfo, setVisitorInfo] = useState("");

  useEffect(() => {
    // Track visit
    fetch(`http://localhost:5000/api/track-visit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pageURL: window.location.href }),
    })
      .then((response) => response.json())
      .then((data) =>
        console.log(
          "Actively looking for a Job that we both can grow. I'll wait for the interview 😊\n\nSamuel Choi\nsamuc11@uci.edu"
        )
      )
      .catch((error) => console.error("Error tracking visit:", error));

    // Fetch monthly visitor count
    fetch(`http://localhost:5000/api/monthly-visitors`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error("Error fetching monthly visitors:", data.error);
          setVisitorInfo(`Could not load visitor count: ${data.error}`);
        } else {
          setMonthlyVisitors(data.unique_visitors);
          setVisitorInfo(`${data.unique_visitors}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching monthly visitors:", error);
        setVisitorInfo("Could not load visitor count.");
      });
  }, []);

  return (
    <>
      <div className="md:px-8 px-4 py-[1px] border rounded-2xl items-center">
        <p className="text-sm">Visitors: {visitorInfo}</p>
      </div>
    </>
  );
}
export default App;
