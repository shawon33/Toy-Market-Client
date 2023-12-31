import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const SubCategary = () => {
    const [toyCategory, setCategory] = useState([])

    useEffect(() => {
        fetch(`https://toy-server-shawon33.vercel.app/toys`)
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })
    }, [])

    const Doll = toyCategory.filter(x => x.category == 1);
    const BarbieDoll = toyCategory.filter(x => x.category == 2);
    const AmericanGirl = toyCategory.filter(x => x.category == 3);

    return (
        <div > 
             <h1 className='text-pink-400 text-6xl text-center bg-slate-50 p-3 font-bold rounded mb-4'>Sub Category</h1>
            <Tabs>
                <TabList>
                    <Tab>Doll</Tab>
                    <Tab>BarbieDoll </Tab>
                    <Tab>AmericanGirl</Tab>
                </TabList>

                <TabPanel>
                    {Doll.map((p, i) => {
                        return (
                            <div key={i}>
                                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-6xl gap-4">
                                    <div className="md:flex gap-x-5 mb-5">
                                        <div className="md:flex-shrink-0">
                                            <img className="h-auto w-full object-cover md:w-56 " src={p.picture} alt="Card image" />
                                        </div>
                                        <div className="p-8 gap-2 bg-slate-400 h-auto w-1/2 text-center">
                                            <div className=" tracking-wide text-indigo-500 font-semibold text-6xl"><span className='text-black'>Name: </span>{p.name}</div>
                                            <div className='text-black text-3xl font-bold'>
                                                <p> Price: ${p.price}</p>
                                                <p> Rating: {p.rating}</p>
                                                <button className='bg-blue-700 hover:bg-blue-400 text-white font-bold text-3xl py-2 px-4 rounded'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </TabPanel>
                <TabPanel>
                    {BarbieDoll.map((p, i) => {
                        return (
                            <div key={i}>
                                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-6xl gap-4">
                                    <div className="md:flex gap-x-5 mb-5">
                                        <div className="md:flex-shrink-0">
                                            <img className="h-auto w-full object-cover md:w-56 " src={p.picture} alt="Card image" />
                                        </div>
                                        <div className="p-8 gap-2 bg-slate-400 h-auto w-1/2 text-center">
                                            <div className=" tracking-wide text-indigo-500 font-semibold text-6xl"><span className='text-black'>Name: </span>{p.name}</div>
                                            <div className='text-black text-3xl font-bold'>
                                                <p> Price: ${p.price}</p>
                                                <p> Rating: {p.rating}</p>
                                                <button className='bg-blue-700 hover:bg-blue-400 text-white font-bold text-3xl py-2 px-4 rounded'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </TabPanel>
                <TabPanel>
                    {AmericanGirl.map((p, i) => {
                        return (
                            <div key={i}>
                                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-6xl gap-4">
                                    <div className="md:flex gap-x-5 mb-5">
                                        <div className="md:flex-shrink-0">
                                            <img className="h-auto w-full object-cover md:w-56 " src={p.picture} alt="Card image" />
                                        </div>
                                        <div className="p-8 gap-2 bg-slate-400 h-auto w-1/2 text-center">
                                            <div className=" tracking-wide text-indigo-500 font-semibold text-6xl"><span className='text-black'>Name: </span>{p.name}</div>
                                            <div className='text-black text-3xl font-bold'>
                                                <p> Price: ${p.price}</p>
                                                <p> Rating: {p.rating}</p>
                                                <button className='bg-blue-700 hover:bg-blue-400 text-white font-bold text-3xl py-2 px-4 rounded'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategary;