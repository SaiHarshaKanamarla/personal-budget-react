import Axios from 'axios';
import React, { useState,useEffect } from 'react';
import {Pie} from 'react-chartjs-2';

const AxiosPie = () =>{
    const [chartData, setChartData] = useState({});
    const [employeeTitle, setEmployeeTitle] = useState([]);
    const [employeeBudget, setEmployeeBudget] = useState([]);

    const chart = () => {
        let empTitle = [];
        let empBudget = []
        Axios.get("http://localhost:5000/budget")
             .then(res =>{
                 console.log(res);
                 for(const dataObj of res.data){
                    empTitle.push(dataObj.title);
                    empBudget.push(dataObj.budget);
                 }
                 setChartData({
                    labels : empTitle,
                    datasets : [
                        {
                            label : 'Budget Distirbution',
                            data : empBudget,
                            backgroundColor : [
                                                '#ffcd56',
                                                '#ff6384',
                                                '#40E82F',
                                                '#6E453C',
                                                '#23rvfs',
                                                '#6324EA',
                                                '#A9256B',
                                                '#0BF0E8',
                                                '#F0FF00'
                                            ]
                            
                        }
                    ]
                })
             })
             .catch(e => {
                 console.log(e)
             }) 
             console.log(empTitle, empBudget)            
        
    }

    useEffect(() => {
        chart()
    },[])

    return(
        <div className="App">
            <div style={{height:"500px",width:"500px"}}>
                <Pie data = {chartData} />
            </div>
        </div>
    )
}


export default AxiosPie;