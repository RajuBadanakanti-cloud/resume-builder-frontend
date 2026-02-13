

const TearmsAndConditionsPopup = ({ handleAgree }) => {
    return (
        <div className="w-full h-full fixed top-0 left-0 bg-linear-to-t from-emerald-200 to-emerald-50 bg-opacity-50 z-50 flex justify-center items-center">

            <div className="bg-white text-emerald-800 p-4 md:p-6 rounded-lg shadow-lg w-[95%] md:w-400 max-w-xl ">
                <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">Terms and Conditions</h2>
                <p className="mb-4 text-[12px] md:text-base font-semibold">By using this resume builder, you agree to the following terms and conditions:</p>
                <ul className="w-full list-disc list-inside mb-10 text-black">
                    <li className="mb-3 text-[11px] md:text-base">Information accuracy is the user’s responsibility.</li>
                    <li className="mb-3 text-[11px] md:text-base">Refreshing or closing the page may result in loss of unsaved data.</li>
                    <li className="mb-3 text-[11px] md:text-base">We are not responsible for any resulting loss or damage.</li>
                </ul>
                <button onClick={handleAgree} className="bg-emerald-500 text-white text-sm md:text-base px-3 md:px-4 py-2 rounded cursor-pointer
                 hover:bg-emerald-600 transition duration-300 ease-in-out">I Agree</button>
            </div>
        </div>
 

      
    );
}

export default TearmsAndConditionsPopup;

