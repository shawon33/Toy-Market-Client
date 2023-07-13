import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-48 bg-slate-400 text-black font-bold'>
            <h2 className="text-6xl font-bold mb-4 text-center p-5  bg-slate-100">Question and Answer</h2>


            <div className="max-w-3xl mx-auto mt-8">
                <div className="bg-gray-100 rounded-lg p-4">
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="ml-4">
                                <p className="font-semibold text-4xl">Question :</p>
                                <p className=" text-red-500">Compare SQL and NoSQl databases?</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="ml-4">
                                <p className="font-semibold text-green-400 text-4xl">Answer :</p>
                                <p className="text-gray-600"><span className='text-4xl'>SQl:</span> SQL databases use a structured data model based on tables with predefined schemas. Data is organized into rows and columns, and relationships between tables are established using foreign keys. </p>
                                <p className="text-gray-600"><span className='text-4xl'>NoSQl:</span> NoSQL databases use a variety of data models, such as key-value pairs, documents, wide-column stores, or graphs. They are schema-less, allowing for flexible and dynamic data structures.</p>
                                <p className="font-semibold text-green-400 text-4xl">Compare :</p>
                                <ul>
                                    <li>Scalability:</li>
                                    <li>Flexibility:</li>
                                    <li>Query Language:</li>
                                    <li>ACID Compliance:</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto mt-8">
                <div className="bg-gray-100 rounded-lg p-4">
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="ml-4">
                                <p className="font-semibold text-4xl">Question :</p>
                                <p className=" text-red-500">What is express JS? What is Nest Js?</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="ml-4">
                                <p className="font-semibold text-green-400 text-4xl">Answer :</p>
                                <p className="text-gray-600"><span className='text-4xl'>Express JS:</span> Express.js is a minimalist and flexible web application framework for Node.js. It provides a set of features and tools to build web applications and APIs quickly. Express.js focuses on simplicity and provides a lightweight middleware system that allows developers to handle HTTP requests and responses efficiently. </p>
                                <p className="text-gray-600"><span className='text-4xl'>Nest JS:</span>Nest.js is a progressive and opinionated Node.js framework for building scalable and maintainable server-side applications. It is built with TypeScript and draws inspiration from Angular, combining elements of object-oriented programming, functional programming, and reactive programming. </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto mt-8">
                <div className="bg-gray-100 rounded-lg p-4">
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="ml-4">
                                <p className="font-semibold text-4xl">Question :</p>
                                <p className=" text-red-500">What is MOngoDb Aggregate and how does it work?</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="ml-4">
                                <p className="font-semibold text-green-400 text-4xl">Answer :</p>
                                <p className="text-gray-600"><span className='text-4xl'>MongoDb aggregate:</span> In MongoDB, the aggregate function is a powerful tool used for data aggregation and analysis. It allows you to perform complex data processing tasks and perform operations similar to SQL's GROUP BY and JOIN clauses. The aggregate function works by applying a series of operations, called stages, to a collection of documents.</p>
                                <p className="text-gray-600"><span className='text-4xl'>Working process:</span>Nest.js is a progressive and opinionated Node.js framework for building scalable and maintainable server-side applications. It is built with TypeScript and draws inspiration from Angular, combining elements of object-oriented programming, functional programming, and reactive programming. </p>
                                <ul>
                                    <li>Pipeline Stages:The aggregate function takes an array of pipeline stages as its argument.
                                        Each stage represents a specific operation that will be applied to the documents in the </li>
                                    <li>Common Pipeline Stages:$match: Filters the documents based on specified conditions, similar to the query in the find function.
                                        $project: Specifies the fields to include or exclude from the output documents and allows the transformation of fields.</li>
                                    <li>Execution:When the aggregate function is executed, MongoDB processes the pipeline stages on the server side.
                                        The documents flow through the stages, and each stage modifies or filters the document stream.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;