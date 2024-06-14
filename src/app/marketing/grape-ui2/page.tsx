import StatsChartCard from "@/components/StateChartCard";
import { grape_ui2, grape_ui2_reactivation, organic } from "@/utils/dummydata";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Image from "next/image";
 
const dataSent = [
    { name: 'Jan', value: 3000 },
    { name: 'Feb', value: 2000 },
    { name: 'Mar', value: 2780 },
    { name: 'Apr', value: 1890 },
    { name: 'May', value: 2390 },
    { name: 'Jun', value: 3490 },
    { name: 'Jul', value: 2000 },
    { name: 'Aug', value: 2780 },
    { name: 'Sep', value: 1890 },
    { name: 'Oct', value: 2390 },
    { name: 'Nov', value: 3490 },
    { name: 'Dec', value: 3000 },
  ];
  
  const dataReplied = [
    { name: 'Jan', value: 1500 },
    { name: 'Feb', value: 1000 },
    { name: 'Mar', value: 1390 },
    { name: 'Apr', value: 945 },
    { name: 'May', value: 1195 },
    { name: 'Jun', value: 1745 },
    { name: 'Jul', value: 1000 },
    { name: 'Aug', value: 1390 },
    { name: 'Sep', value: 945 },
    { name: 'Oct', value: 1195 },
    { name: 'Nov', value: 1745 },
    { name: 'Dec', value: 1500 },
  ];

  const dataAppoinment = [
    { name: 'Jan', value: 1500 },
    { name: 'Feb', value: 1000 },
    { name: 'Mar', value: 1390 },
    { name: 'Apr', value: 945 },
    { name: 'May', value: 1195 },
    { name: 'Jun', value: 1745 },
    { name: 'Jul', value: 1000 },
    { name: 'Aug', value: 1390 },
    { name: 'Sep', value: 945 },
    { name: 'Oct', value: 1195 },
    { name: 'Nov', value: 1745 },
    { name: 'Dec', value: 1500 },
  ];

export default function GrapeUI2Layout() {
  return (
    <>
   
    <div style={{marginBottom:"20px"}}>
      
           <div 
           className="flex bg-[#E0E0E0] flex-col gap-4 text-sm w-full rounded-lg border">
          <Table  
          >
            
                <TableHead >
                <TableRow sx={{backgroundColor:"#40F440",borderTopLeftRadius:2,borderTopRightRadius:2}}>
                    <TableCell>Name</TableCell>
                    <TableCell>Impressions</TableCell>
                    <TableCell>Clicks</TableCell>
                    <TableCell>Conversions</TableCell>
                    <TableCell> </TableCell>

                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>New Leads 1</TableCell>
                    <TableCell>125,258</TableCell>
                    <TableCell>5248</TableCell>
                    <TableCell>402</TableCell>
                    <TableCell>
                    <Button size="small" variant="contained" sx={{backgroundColor:"#631363"}}>
            Details
          </Button>
                    </TableCell>

                </TableRow>
                </TableBody>
            
          </Table>
           <StatsChartCard
         
        dataSent={dataSent}
         label={"Impressions"}
         text2={"Client Spends"}
        
      />
       <StatsChartCard
         
         dataSent={dataReplied}
          label={"Clicks"}
          text2={"Average Cost Per Click"}
          
       />
        <StatsChartCard
         
         dataSent={dataAppoinment}
          label={"Conversions"}
          text2={"Cost Per Conversion"}
          
       />
           </div>
   
    </div>
    <div className="px-2 flex gap-4 flex-col">
      {grape_ui2.map((item, index) => (
        <div
          key={index}
          className="flex bg-[#E0E0E0] flex-col gap-4 text-sm w-full rounded-lg border">
          <div className="flex">
            <div className="font-semibold flex-grow text-white px-1 text-xs w-28 bg-[#631363] p-1  rounded-tl-xl">
              Name
            </div>
            <div className="text-wrap w-20 font-semibold  text-white bg-[#631363]  text-xs p-1">
              Impressions
            </div>
            <div className="text-wrap w-12 font-semibold  text-white bg-[#631363]  text-xs p-1">
              Clicks
            </div>
            <div className="text-wrap w-20  font-semibold  text-white bg-[#631363]   text-xs p-1">
              Conversions
            </div>
             
          </div>{" "}
          <div className="gap-2 py-1 px-2">
            <div className="flex    ">
              <div className="w-28 gap-2 flex flex-grow text-[#6D6D6D] font-semibold text-sm">
                <Image src={item.img} alt="logo" height={0} width={0} />
                <div className="text-xs pt-1">{item.name}</div>
              </div>
              <div className="w-20 text-start text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1">{item.impressions}</div>{" "}
              </div>
              <div className="w-12 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1">{item.clicks}</div>
              </div>
              <div className="w-16 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1">{item.conversions}</div>
              </div>
              
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
      <div style={{padding:"30px 0px 30px 10px"}}>
        <h1>
          DB Reactivation
            </h1>  
        </div>
        <div className="px-2 flex gap-4 flex-col">
      {grape_ui2_reactivation.map((item, index) => (
        <div
          key={index}
          className="flex bg-[#E0E0E0] flex-col gap-4 text-sm w-full rounded-lg border">
          <div className="flex">
            <div className="font-semibold flex-grow text-white px-1 text-xs w-28 bg-[#631363] p-1  rounded-tl-xl">
              Name
            </div>
            <div className="text-wrap w-12 font-semibold  text-white bg-[#631363]  text-xs p-1">
              Text Sent
            </div>
            <div className="text-wrap w-12 font-semibold  text-white bg-[#631363]  text-xs p-1">
              Text Replied 
            </div>
            <div className="text-wrap w-16  font-semibold  text-white bg-[#631363]   text-xs p-1">
              Leads
            </div>
             
          </div>{" "}
          <div className="gap-2 py-1 px-2">
            <div className="flex    ">
              <div className="w-28 gap-2 flex flex-grow text-[#6D6D6D] font-semibold text-sm">
                <Image src={item.img} alt="logo" height={0} width={0} />
                <div className="text-xs pt-1">{item.name}</div>
              </div>
              <div className="w-12 text-start text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1">{item.Text_Sent}</div>{" "}
              </div>
              <div className="w-12 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1">{item.text_replied}</div>
              </div>
              <div className="w-16 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1">{item.Leads}</div>
              </div>
              
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
    </>
    
  );
}


