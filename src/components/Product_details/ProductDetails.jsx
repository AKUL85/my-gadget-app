
import { useLoaderData, useParams } from 'react-router';
import { addToStorage } from '../../utility/Utility';
import { AddWishToLocalstorage } from '../../utility/Wish';

const ProductDetails = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const ClickedData = data.find(ClickedData => ClickedData.product_id === product_id);
    const { product_image, product_title, price, description, brand, rating, availability, specification } = ClickedData;
    const addCart=(id)=>{
        addToStorage(id);
    }
    const addWish=(id)=>{
        AddWishToLocalstorage(id);
    }
    return (

        <div className="md:mb-60 mb-96 relative">
            <div className="bg-[#9538E2] w-full pb-36">
                <h1 className="text-2xl font-bold text-center my-3 py-3">Product Details</h1>
                <p className="text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to</p>
                <p className="text-center">the coolest accessories, we have it all!</p>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full px-2 sm:px-4 sm:w-80 md:w-5/6 lg:w-3/4 xl:w-2/3">
                <div className="card bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
                    <div className="md:flex">
                        <figure className="md:w-1/2 lg:w-2/5 p-2 sm:p-4 md:p-6 flex justify-center bg-gray-50">
                            <img
                                src={product_image}
                                alt={product_title}
                                className="w-full h-auto max-h-60 md:max-h-80 object-contain rounded-lg"
                            />
                        </figure>

                        <div className="p-4 sm:p-6 md:w-1/2 lg:w-3/5 space-y-2 sm:space-y-3">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{product_title}</h2>

                            <div className="flex items-center gap-4">
                                <p className="text-lg sm:text-xl font-semibold text-primary">${price}</p>
                                <span className={`px-2 py-1 rounded-full text-sm font-medium ${availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {availability ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <p className="text-gray-700 font-medium">Brand: {brand}</p>
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500">★★★★★</span>
                                    <span className="font-medium text-black">{rating}</span>
                                </div>
                            </div>

                            <div className="space-y-1 sm:space-y-2">
                                <p className="text-gray-600 text-sm sm:text-base">{description}</p>
                                <p className="text-xs text-gray-500">{specification}</p>
                            </div>

                            <div className="card-actions pt-2 sm:pt-4">
                                <button onClick={() => addCart(product_id)} className="btn btn-primary px-4 py-2 sm:px-6 rounded-lg hover:bg-opacity-90 transition">
                                    Add to Card
                                </button>
                                <button onClick={()=>addWish(product_id)} className="btn btn-primary px-4 py-2 sm:px-6 rounded-lg hover:bg-opacity-90 transition">
                                    Add WishList
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;






