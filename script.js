const series={
 inflation:{years:[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],values:[0.1,2.9,2.5,2.8,0.2,3.2,17.3,8.9,1.2,3.7]},
 unemployment:{years:[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],values:[9.6,8.7,7.4,6.3,8.0,7.5,6.8,6.4,6.9,6.5]},
 shadow:{years:[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],values:[20.7,22.0,24.2,23.9,25.5,26.6,26.5,22.9,21.4,21.8]},
 openness:{years:[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],values:[126.3,128.6,128.1,125.2,123.8,136.7,159.8,135.5,131.2,129.6]},
 energy:{years:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],values:[44.467,47.918,51.811,53.735,51.581,51.397,58.976,59.603,65.694,69.444]},
 renewables:{years:[2012,2013,2014,2015,2016,2017,2018,2019,2020,2021],values:[40.4,39.6,40.2,38.1,38.5,42.6,41.0,41.5,43.8,44.0]},
 rd:{years:[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],values:[0.7,0.6,0.4,0.5,0.6,0.6,0.7,0.7,0.8,0.8]},
 age:{years:[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],values:[19.775,20.011,20.198,20.198,20.672,20.846,21.012,21.332,21.332,22.195]},
 food:{years:[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],values:[3232.79,3212.08,3222.04,3227.63,3261.66,3269.64,3235.10,3253.60,3282.47,3342.19]}
};
const macroYears=[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
const macro={inflation:series.inflation.values,unemployment:series.unemployment.values,shadow:series.shadow.values,current:[1.7,1.4,-1.2,-1.0,2.4,-5.2,-7.5,-5.6,-3.4,-5.2],savings:[23.5,24.2,23.8,23.5,25.1,22.0,19.5,21.1,19.3,20.1]};
const tbody=document.getElementById('dataRows');if(tbody)tbody.innerHTML=macroYears.map((y,i)=>`<tr><td>${y}</td><td>${macro.inflation[i].toFixed(1)}</td><td>${macro.unemployment[i].toFixed(1)}</td><td>${macro.shadow[i].toFixed(1)}</td><td>${macro.current[i].toFixed(1)}</td><td>${macro.savings[i].toFixed(1)}</td></tr>`).join('');
const common={responsive:true,maintainAspectRatio:false,interaction:{intersect:false,mode:'index'},plugins:{legend:{display:false},tooltip:{backgroundColor:'#203b57',padding:11,displayColors:false}},scales:{x:{grid:{display:false},ticks:{color:'#748592',font:{size:10}}},y:{grid:{color:'#edf0f2'},ticks:{color:'#748592',font:{size:10}}}}};
function draw(id,key,label){const el=document.getElementById(id),s=series[key];if(!el||!window.Chart||!s)return;new Chart(el,{type:'line',data:{labels:s.years,datasets:[{label,data:s.values,borderColor:'#5d7e9b',backgroundColor:'rgba(114,151,180,.13)',borderWidth:2.4,pointRadius:2.8,pointHoverRadius:5,tension:.24,fill:true}]},options:{...common,scales:{...common.scales,y:{...common.scales.y,title:{display:true,text:label,color:'#748592',font:{size:10}}}}}})}
draw('inflationChart','inflation','%');draw('unemploymentChart','unemployment','%');draw('opennessChart','openness','% ВВП');draw('energyChart','energy','%');
