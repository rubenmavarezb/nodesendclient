import React from 'react';

const Form = () => {
    return ( 
        <div className="w-full mt-20">
            <div>
                <label htmlFor="downloads" className="text-lg text-gray-800">Delete after:</label>
                <select name="downloads" id="downloads" className="appearance-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline-none focus:border-gray-500">
                    <option value="" selected disabled>-- Select --</option>
                    <option value="1">1 download</option>
                    <option value="5">5 download</option>
                    <option value="10">10 download</option>
                    <option value="20">20 download</option>
                </select>
            </div>
        </div>
     );
}
 
export default Form;