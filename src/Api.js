async function requestCommute(TrainLine, StartStation, EndStation, ArrivalTime, ArrivalDate){
        const data = {TrainLine, StartStation, EndStation, ArrivalTime, ArrivalDate};
        const commuterequest = {
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
            
          }
        const response = await fetch('/commuterequest',commuterequest);
        const response_data = await response.json();
        return response_data;
      }
export { requestCommute };