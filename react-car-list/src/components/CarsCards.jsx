function CarCards() {

    return (
        <>
            <div className="block rounded-lg bg-gray-100 w-96 shadow-md py-2">
                <div className="flex justify-center">
                    <img
                        className="rounded-t-lg h-96"
                        src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg"
                        alt="" />
                </div>
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight ">
                        Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral">
                        Some quick example text to build on the card title and make up the
                        bulk of the cards content.
                    </p>
                    <button
                        type="button"
                        className="inline-block rounded bg-gray-400 hover:bg-gray-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Button
                    </button>
                </div>
            </div>
        </>
    )
}

export default CarCards
