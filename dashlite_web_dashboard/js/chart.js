// chart.js - type: bar
$(document).ready(function(){
    const ctx = document.getElementById('myChart_bar');

    new Chart(ctx, {
        type: 'bar', //pie, line, doughnut, polarArea
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dataUnit: "USD",
            datasets: [{
                label: '',
                color: "#6576ff",
                data: [11e3, 8e3, 12500, 5500, 9500, 14299, 11e3, 8e3, 12500, 5500, 9500, 14299],
                backgroundColor: ["#e0e4ff", "#e0e4ff", "#e0e4ff", "#e0e4ff", "#e0e4ff", "#e0e4ff", "#e0e4ff", "#e0e4ff", "#e0e4ff", "#e0e4ff", "#e0e4ff", "#6576ff"],
                borderWidth: 1,
                borderColor: "transparent",
                hoverBorderColor: "transparent",
                borderSkipped: "bottom",
                barThickness: 15
            }]
        },
        options: {
            maintainAspectRatio :false,
            plugins:{
                legend: {
                    display: false
                },
                datalabels: {
                    display: false
                },
                tooltip:{
                    enabled: true,
                    usePointStyle: true,
                    displayColors: false,
                    titleSpacing: 3,
                    backgroundColor: "#eff6ff",
                    titleFont: {
                        size: 11
                    },
                    titleColor:"#9eaecf",
                    titleMarginBottom: 4,
                    titleAlign : "left",
                    bodyFont: {
                        size: 10
                    },
                    bodyColor:"#9eaecf",
                    bodySpacing: 3,
                    padding: 8
                }
            },
            scales: {
                x : {
                    display : false,
                    grid : {
                        display: false, 
                        drawBorder: false
                    }, 
                    gridLines: {
                        display: false
                    }
                },
                y : {
                    display : false,
                    grid : {
                        display: false, 
                        drawBorder: false
                    },
                    gridLines: {
                        display: false
                    }
                }
            }
        }
    });
});
 
// chart.js - type: line
$(document).ready(function(){
    const ctx = document.getElementById('totalSells');

    new Chart(ctx, {
        type: 'line', //pie, line, doughnut, polarArea
        data: {
            labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
            dataUnit: "Orders",
            datasets: [{
                label: 'Orders',
                data: [85, 125, 105, 115, 130, 106, 141, 110, 95, 120, 111, 105, 113, 107, 122, 100, 95, 110, 120, 107, 100, 105, 123, 115, 110, 117, 125, 75, 95, 101],
                borderColor: "#6A29FF",
                backgroundColor:"#6A29FF50",
                borderWidth: 2,
                fill : true,
                tension: 0.3,
                bezierCurve: false,
                pointBorderColor: "transparent",
                pointBackgroundColor: "transparent",
                pointRadius: 4,
                pointHitRadius: 4,
                pointBorderWidth:2,
                pointHoverRadius: 4,
                pointHoverBorderColor:"#6A29FF",
                pointHoverBackgroundColor:"#fff",
                pointHoverBorderWidth:2,
            }]
        },
        options: {
            maintainAspectRatio :false,
            plugins:{
                legend: {
                    display: false
                },
                datalabels: {
                    display: false
                },
                tooltip:{
                    enabled: true,
                    usePointStyle: true,
                    displayColors: false,
                    titleFont: {
                        size: 11
                    },
                    bodyFont: {
                        size: 10
                    }
                }
            },
            scales: {
                x : {
                    display : false,
                    grid : {
                        display: false, 
                        drawBorder: false
                    }, 
                    gridLines: {
                        display: false
                    }
                },
                y : {
                    display : false,
                    grid : {
                        display: false, 
                        drawBorder: false
                    },
                    gridLines: {
                        display: false
                    }
                }
            }
        }
    });
});

// chart.js - type: line
$(document).ready(function(){
    const ctx = document.getElementById('weeklySells');

    new Chart(ctx, {
        type: 'line', //pie, line, doughnut, polarArea
        data: {
            labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
            dataUnit: "Orders",
            datasets: [{
                label: 'Orders',
                borderColor: "#4258FF",
                backgroundColor:"#4258FF50",
                borderWidth: 2,
                fill : true,
                tension: 0.3,
                bezierCurve: false,
                pointBorderColor: "transparent",
                pointBackgroundColor: "transparent",
                pointRadius: 4,
                pointHitRadius: 4,
                pointBorderWidth:2,
                pointHoverRadius: 4,
                pointHoverBorderColor:"#4258FF",
                pointHoverBackgroundColor:"#fff",
                pointHoverBorderWidth:2,
                data: [92, 105, 125, 85, 110, 106, 131, 105, 110, 115, 135, 105, 120, 85, 122, 100, 125, 110, 120, 125, 85, 105, 123, 115, 90, 117, 125, 100, 95, 65]
            }]
        },
        options: {
            maintainAspectRatio :false,
            plugins:{
                legend: {
                    display: false
                },
                datalabels: {
                    display: false
                },
                tooltip:{
                    enabled: true,
                    usePointStyle: true,
                    displayColors: false,
                    titleFont: {
                        size: 11
                    },
                    bodyFont: {
                        size: 10
                    }
                }
            },
            scales: {
                x : {
                    display : false,
                    grid : {
                        display: false, 
                        drawBorder: false
                    }, 
                    gridLines: {
                        display: false
                    }
                },
                y : {
                    display : false,
                    grid : {
                        display: false, 
                        drawBorder: false
                    },
                    gridLines: {
                        display: false
                    }
                }
            }
        }
    });
});

// chart.js - type: bar
$(document).ready(function(){
    const ctx = document.getElementById('courseProgress');

    new Chart(ctx, {
        type: 'bar', //pie, line, doughnut, polarArea
        data: {
            labels: ["Web Development", "Mobile Application", "Graphics Design", "Database", "Marketing", "Machine Learning", "Data Science"],
            datasets: [{
                label: "Weekly Enrole",
                backgroundColor: ["#f98c45", "#6baafe", "#8feac5", "#6b79c8", "#79f1dc", "#FF65B6", "#6A29FF"],
                data: [1740, 2500, 1820, 1200, 1600, 2500, 2250, 3410],
            }, {
                label: "Monthly Enrole",
                backgroundColor: ["rgba(249, 140, 69, 0.4)", "rgba(156, 171, 255, 0.4)", "rgba(143, 234, 197, 0.4)", "rgba(107, 121, 200, 0.4)", "rgba(121, 241, 220, 0.4)", "rgba(255, 101, 182, 0.4)", "rgba(106, 41, 255, 0.4)"],
                data: [2420, 1820, 3e3, 5e3, 2450, 1820, 2e3, 1890]
            }]
        },
        options: {
            indexAxis: 'y',
            maintainAspectRatio :false,
            borderWidth: 2,
            borderColor: "transparent",
            hoverBorderColor: "transparent",
            borderSkipped: "bottom",
            barThickness: "8",
            categoryPercentage: .5,
            barPercentage: 1,
            plugins:{
                legend: {
                    display: false
                },
                datalabels: {
                    display: false
                },
                tooltip:{
                    enabled: true,
                    usePointStyle: true,
                    displayColors: false,
                    titleSpacing: 3,
                    backgroundColor: "#eff6ff",
                    titleFont: {
                        size: 14
                    },
                    titleColor:"#9eaecf",
                    titleMarginBottom: 4,
                    titleAlign : "left",
                    bodyFont: {
                        size: 10
                    },
                    bodyColor:"#9eaecf",
                    bodySpacing: 3,
                    padding: 8
                }
            },
            legend: {
                labels: {
                    boxWidth: 30,
                    padding: 20,
                    fontColor: "#6783b8"
                }
            },
            scales: {
                x : {
                    display : false,
                    stacked:true,
                },
                y : {
                    display : false,
                    stacked:true
                }
            }
        }
    });
});

// chart.js - type: bar
$(document).ready(function(){
    const ctx = document.getElementById('analyticAuData');

    new Chart(ctx, {
        type: 'bar', //pie, line, doughnut, polarArea
        data: {
            labels: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
            dataUnit: "People",
            datasets: [{
                label: '',
                color: "#9cabff",
                data: [1110, 1220, 1310, 980, 900, 770, 1060, 830, 690, 730, 790, 950, 1100, 800, 1250, 850, 950, 450, 900, 1e3, 1200, 1250, 900, 950, 1300, 1200, 1250, 650, 950, 750],
                backgroundColor: "#9cabff",
                borderWidth: 2,
                borderColor: "#9cabff",
                borderSkipped: "bottom", 
                barThickness: 15
            }]
        },
        options: {
            maintainAspectRatio :false,
            legend:{
                labels: {
                    display:false,
                    fontColor: 'rgb(255, 255, 255)'
                },
            },
            plugins:{
                legend: {
                    display: false
                },
                datalabels: {
                    display: false
                },
                tooltip:{
                    enabled: true,
                    usePointStyle: true,
                    displayColors: false,
                    titleSpacing: 3,
                    backgroundColor: "#eff6ff",
                    titleFont: {
                        size: 11
                    },
                    titleColor:"#9eaecf",
                    titleMarginBottom: 4,
                    titleAlign : "left",
                    bodyFont: {
                        size: 10
                    },
                    bodyColor:"#9eaecf",
                    bodySpacing: 3,
                    padding: 8
                }
            },
            scales: {
                x : {
                    display : 0,
                    // grid : {
                    //     display: false, 
                    //     drawBorder: false
                    // }, 
                    gridLines: {
                        display: 1
                    }
                },
                y : {
                    display : 1,
                    gridLines: {
                        display: 1
                    }
                }
            }
        }
    });
});