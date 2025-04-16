import React from 'react';
import { Section } from '../shared/section';
import NetLogoApi from "../../utils/api";
import { type ReferenceEntry } from "../../utils/api";


interface ReferenceSectionProps {
    pageData: ReferenceEntry[];
}

const api = new NetLogoApi();
const siteData = await api.getReferences();

const ReferenceSection = ({ pageData }: ReferenceSectionProps) => {
    // FUNCTION ReferenceSection TAKES pageData (a list of reference entries):

    // CREATE an empty map called mapR
    //     - Keys will be years (numbers)
    //     - Values will be arrays of reference strings

    // FOR EACH item IN pageData:
    //     IF mapR does not already have a key for item.year:
    //         - ADD a new entry in mapR with item.year as the key
    //         - INITIALIZE the value as an empty array

    //     ADD item.reference to the array associated with item.year in mapR

    // OPTIONAL: Print out mapR to verify grouping by year

    // (Later on: This grouped map can be used to render references grouped by year in the UI)

    //proper years
    //makae a for loop in typescript to loop through the years grouped by year, make sure that are grouped by year 
    //mak ea map with the key being the year and the value being a array of refrences for that year.
    let mapR: Map<number, string[]> = new Map();

    for (let i = 0; i < pageData.length; i++) {
        // make a empty map 
        console.log(pageData[i]);
        if (!mapR.has(pageData[i].year)) {
            mapR.set(pageData[i].year, []);
        }
        mapR.get(pageData[i].year)?.push(pageData[i].reference);
    
    }
    return mapR;

ReferenceSection(pageData);
  



    //write psuedocude of what Iam doing 

    // pageData.forEach 
    // (item => {
    //     if (!mapR.has(item.year)) {
    //         mapR.set(item.year, []);
    //     }
    //     mapR.get(item.year)?.push(item.reference);
    // }); 

    // console.log(mapR);

    // const pData = pageData.entries();
    // for (let x of pData) {
    //     console.log(x);
    // }



//     // Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Create an Iterator
// const list = fruits.entries();

// // List the Entries
// let text = "";
// for (let x of list) {
//   text += x;
// }


    


    return (
        //HTML for this page, ask jacob about the design for this page, diegn to be worked off of.
        <div>
            <h1>References</h1>

            <p>This page lists publications that have used or cited NetLogo software and/or models. </p>

                <p>This list is by no means complete or exhaustive. If you are using and/or citing NetLogo in your work, or you know of work that is not listed, please send the relevant citations to <a href="mailto:netlogo-refs@ccl.northwestern.edu">netlogo-refs@ccl.northwestern.edu</a>. </p>

                    <p>Google Scholar's database lists roughly 38,600 Netlogo citations. You can explore it <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C14&q=netlogo&btnG=">here:</a> </p>

                        <p><strong>Bold</strong> = Publications authored by the CCL </p>

                            <p></p>


                        </div>
                        
                        

                        )

}

                        export {ReferenceSection}