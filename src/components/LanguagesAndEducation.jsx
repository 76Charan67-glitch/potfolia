import { Icon } from "@iconify/react";

const LanguagesAndEducation = () => {
    return (
        <section
            id="languages-education"
            className={`px-4 sm:px-6 md:px-8 py-20 max-w-6xl mx-auto`}
        >
            <div className="grid md:grid-cols-2 gap-15">
                <div>
                    <h2 className={`text-4xl font-bold mb-8 text-white text-center md:text-left`}>
                        Languages
                    </h2>

                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <span className={`font-semibold text-white text-lg`}>
                                    Tamil
                                </span>
                                <span className="font-medium text-orange-500 text-lg">
                                    95%
                                </span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3">
                                <div
                                    className="bg-orange-500 h-3 rounded-full relative transition-all duration-1000 ease-out"
                                    style={{ width: "95%" }}
                                >
                                    <div className="absolute right-0 top-0 w-4 h-4 bg-white rounded-full -mt-0.5 -mr-2 border-2 border-orange-500"></div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <span className={`font-semibold text-white text-lg`}>
                                    English
                                </span>
                                <span className="font-medium text-orange-500 text-lg">
                                    85%
                                </span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3">
                                <div
                                    className="bg-orange-500 h-3 rounded-full relative transition-all duration-1000 ease-out"
                                    style={{ width: "85%" }}
                                >
                                    <div className="absolute right-0 top-0 w-4 h-4 bg-white rounded-full -mt-0.5 -mr-2 border-2 border-orange-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className={`text-4xl font-bold mb-8 text-white text-center md:text-left`}>
                        Education
                    </h2>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                    <Icon
                                        icon="mdi:school"
                                        className="text-white text-2xl"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className={`text-xl font-bold text-white mb-2`}>
                                    ABC University
                                </h3>
                                <p className={`text-gray-300 font-medium mb-1`}>
                                    Bachelor of Business Administration
                                </p>
                                <p className="text-orange-500 font-semibold">
                                    2020 - 2024
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                    <Icon
                                        icon="mdi:book-open-page-variant"
                                        className="text-white text-2xl"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className={`text-xl font-bold text-white mb-2`}>
                                    XYZ College
                                </h3>
                                <p className={`text-gray-300 font-medium mb-1`}>
                                    Higher Secondary
                                </p>
                                <p className="text-orange-500 font-semibold">
                                    2018 - 2020
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LanguagesAndEducation;
