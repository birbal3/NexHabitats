import Image from "next/image";

export default function CompanySection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full p-14  bg-gray-50">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:shadow-lg transition duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Save Time</h2>
                <p className="text-gray-600">
                    Realistic 3D model & top professional help to take the guesswork out of the designing process.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:shadow-lg transition duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Save Money</h2>
                <p className="text-gray-600">
                    Top talent for up to 80% less than traditional interior design & trade discounts of 5% to 45% at the top vendors.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:shadow-lg transition duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Convenient & Stress Free</h2>
                <p className="text-gray-600">
                    A fun and easy white-glove service including everything from design to convenient ordering.
                </p>
            </div>
        </div>
    );
}
