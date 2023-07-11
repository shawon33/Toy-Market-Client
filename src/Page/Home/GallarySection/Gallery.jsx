
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Gallery = () => {



    return (
        <div>
            <h1 className='text-6xl text-center font-bold text-pink-400 pb-4 '>New Collection</h1>
            <Tabs>
                <TabList>
                    <div className='flex justify-center gap-4'>
                        <Tab><button><h1 className='text-4xl font-bold text-pink-500'>Car</h1></button></Tab>
                        <Tab><button><h1 className='text-4xl font-bold text-pink-500'>Doll</h1></button></Tab>
                        <Tab><button><h1 className='text-4xl font-bold text-pink-500'>Toll</h1></button></Tab>
                       
                    </div>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Gallery;