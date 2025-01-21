import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-8xl px-4 text-purple-500 text-center py-8 font-serif">
        Unity Corporations.
      </h1>
      <h2 className="text-3xl text-yellow-600 mx-auto py-4 mb-8 hover:border-b-2 border-yellow-600 font-serif w-[fit-content]">
        Staff Leads.
      </h2>
      <section className="flex flex-wrap justify-center gap-8 section-width mx-auto">
        <div className="flex flex-col justify-start items-center w-[80%] md:w-[45%] border-2 border-purple-400 rounded-2xl py-6 px-5 shadow-lg gap-4 shrink-0">
          <img
            src="https://th.bing.com/th?id=OIP.u-Yt2tcCjepBr-6TB7-EegHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover border-[2px] border-purple-600"
          />
          <h3 className="text-2xl text-yellow-600 font-bold">Aubery Hamford</h3>
          <h4 className="text-lg text-purple-600 font-serif font-bold">
            Data Analyst
          </h4>
          <p className="text-center font-serif text-slate-600">
            Aubery Hamford is the chief data analyst of Unity Corporations. He
            is a genius at handling data and optimizing the most random sets for
            optimum performance.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center w-[80%] md:w-[45%] border-2 border-purple-400 rounded-2xl py-6 px-5 shadow-lg gap-4 shrink-0">
          <img
            src="https://th.bing.com/th?id=OIP.sZ4wMoVgQYmItcIiNLceuQHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover border-[2px] border-purple-600"
          />
          <h3 className="text-2xl text-yellow-600 font-bold">Sarah Pinnock</h3>
          <h4 className="text-lg text-purple-600 font-serif font-bold">
            Research Manager
          </h4>
          <p className="text-center font-serif text-slate-600 ">
            Sarah Pinnock is the chief Research Manager at Unity Corporation.
            She is a pioneer staff of the company and has worked tirelessly to
            ensure accurate information and excellent results.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center w-[80%] md:w-[45%] border-2 border-purple-400 rounded-2xl py-6 px-5 shadow-lg gap-4 shrink-0">
          <img
            src="https://th.bing.com/th/id/OIP.28lI-o8NNikT4vWt3T-GVAHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7"
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover border-[2px] border-purple-600"
          />
          <h3 className="text-2xl text-yellow-600 font-bold">
            Fatima Rosebudding
          </h3>
          <h4 className="text-lg text-purple-600 font-serif font-bold">
            Communications Manager
          </h4>
          <p className="text-center font-serif text-slate-600 ">
            Fatima Rosebudding is another pioneer staff of Unity Corporation.
            She is the lead communciations manager and ensures that there are no
            information leaks or communciation gaps. Everyone at Unity
            Corporations is abreast of all the happenings and events because of
            Ms. Fatima!
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
