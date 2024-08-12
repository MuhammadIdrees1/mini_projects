import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return alert("Browser doesn't support speech recognition.");
  }

  return (
    <>
      {/* <div>
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
        <p>Microphone: {listening ? "On" : "Off"}</p>
        <p>{transcript}</p>
      </div> */}
      <div className="flex mt-32 justify-center">
        <div class="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={SpeechRecognition.startListening}
            >
              Start
            </button>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={SpeechRecognition.stopListening}
            >
              Stop
            </button>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={resetTranscript}
            >
              Reset
            </button>
          </div>
          <div class="mb-4">
            <p class="block text-gray-700 text-sm font-bold mb-2">
              Microphone: {listening ? "On" : "Off"}
            </p>
            <p class="shadow appearance-none border rounded w-full h-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {transcript}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
