import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AxiosPie from '../AxiosPie/AxiosPie'
import DthreeChart from '../DthreeChart/DthreeChart';


const HomePage = () => {

  const [chartData, setChartData] = useState({});
  const [data, setData] = useState({});

  const chart = () => {
    let budgetTitle = [];
    let budgetValue = [];
    axios.get('http://localhost:5000/budget')
    .then(res => {
      for (var i = 0; i< res.data.myBudget.length; i++) {
       budgetTitle.push(res.data.myBudget[i].title);
       budgetValue.push(res.data.myBudget[i].budget);
  
      }
      console.log(budgetTitle);
      setData(res.data.myBudget);
    setChartData({
      labels: budgetTitle,
      datasets: [
        {
          label: "D3 Pie Chart for Personal Budget",
          data: budgetValue,
          backgroundColor : ['#ffcd56',
          '#ff6384',
          '#40E82F',
          '#6E453C',
          '#23rvfs',
          '#6324EA',
          '#A9256B',
          '#0BF0E8',
          '#F0FF00'
          ],
          borderWidth: 2
        }
      ]
    })
  }).catch(()=> {

  })
}

  useEffect(() => {
    chart();
  }, [!data]);



  return (
    <div className="container center">

        <div className="page-area" id="maincontent">
                      
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
             
            <article>            
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>            
            </article>

            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
               

            <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>


            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
           
            <article>
                <h1><center>Pie Chart using Axios</center></h1>
                <p style={{height:"500px",width:"500px"}}>
                    <AxiosPie />
                </p>
            </article>    

            <article>
                <h1><center>Pie Chart using D3.js</center></h1>
                <p style={{height:"500px",width:"500px"}}>
                     <DthreeChart /> 
                </p>
            </article>             

        </div>

    </div>   
  );
}

export default HomePage;
