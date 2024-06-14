import StatsChartCard from "@/components/StateChartCard";
import { organic } from "@/utils/dummydata";
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

export default function GrapeUILayout() {
  return (
    <>
    <div className="px-2 flex gap-4 flex-col">
      {organic.map((item, index) => (
        <div
          key={index}
          className="flex bg-[#E0E0E0] flex-col gap-4 text-sm w-full rounded-lg border">
          <div className="flex w-full ">
            <div className="font-semibold flex-grow text-white px-1 text-xs w-28 bg-[#631363] p-1  rounded-tl-xl">
              Name
            </div>
            <div className="text-wrap w-12 font-semibold  text-white bg-[#631363]  text-xs p-1">
              Posts
            </div>
            <div className="text-wrap w-12 font-semibold  text-white bg-[#631363]  text-xs p-1">
              Likes
            </div>
            <div className="text-wrap w-16  font-semibold  text-white bg-[#631363]   text-xs p-1">
              Comments
            </div>
            <div className="text-wrap w-12 font-semibold  text-white bg-[#631363]  text-xs p-1">
              Shares
            </div>
            <div className="text-wrap w-16 font-semibold  text-white bg-[#631363]  text-xs p-1 rounded-tr-xl">
              Messages
            </div>
          </div>{" "}
          <div className="gap-2 py-1 px-2">
            <div className="flex">
              <div className="w-28 gap-2 flex flex-grow text-[#6D6D6D] font-semibold text-sm">
                <Image src={item.img} alt="logo" height={0} width={0} />
                <div className="text-xs pt-1">{item.name}</div>
              </div>
              <div className="w-12 text-start text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1">{item.posts}</div>{" "}
              </div>
              <div className="w-12 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1">{item.likes}</div>
              </div>
              <div className="w-16 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1">{item.comments}</div>
              </div>
              <div className="w-12 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1 pl-2">{item.shares}</div>
              </div>
              <div className="w-12 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1"> {item.messages}</div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
    <div>
        <div style={{padding:"30px 0px 30px 10px"}}>
        <h1>
          DB Reactivation
            </h1>  
        </div>
           <div 
           className="flex bg-[#E0E0E0] flex-col gap-4 text-sm w-full rounded-lg border">
          <Table sx={{borderTopLeftRadius:2,borderTopRightRadius:2}} >
            
                <TableHead sx={{backgroundColor:"#40F440",borderTopLeftRadius:2,borderTopRightRadius:"20px"}}>
                <TableRow sx={{backgroundColor:"#40F440",borderTopLeftRadius:2,borderTopRightRadius:2}}>
                    <TableCell>Name</TableCell>
                    <TableCell>Text Sent</TableCell>
                    <TableCell>Text replied</TableCell>
                    <TableCell>Leads</TableCell>
                    <TableCell> </TableCell>

                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>Friday 20% Off</TableCell>
                    <TableCell>5000</TableCell>
                    <TableCell>536</TableCell>
                    <TableCell>317</TableCell>
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
         label={"Texts Sent"}
         text2={"Client Spends"}
        
      />
       <StatsChartCard
         
         dataSent={dataReplied}
          label={"Texts Replied"}
          text2={"Average Cost Per Reply"}
          
       />
        <StatsChartCard
         
         dataSent={dataAppoinment}
          label={"Leads"}
          text2={"Cost Per Book Appoinment"}
          
       />
           </div>
   
    </div>
    </>
    
  );
}


