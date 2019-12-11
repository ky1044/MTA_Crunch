async function requestCommute(TrainLine, StartStation, EndStation, ArrivalTime, ArrivalDate){
        const requestArgs = {TrainLine, StartStation, EndStation, ArrivalTime, ArrivalDate};
        const requestFull = {
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify(requestArgs)
            
          }
        const response = await fetch('/commuterequest',requestFull);
        const response_data = await response.json();
        return response_data;
      }
export { requestCommute };