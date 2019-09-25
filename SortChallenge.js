var cities = [{ // array containing object
   city: 'Kampala',
   country: 'Uganda',
   population: 90
},{
   city: 'Nairobi',
   country: 'Kenya',
   population: 100
},{
   city: 'Johannesburg',
   country: 'SAfrica',
   population: 123
},{
   city: 'Cairo',
   country: 'Egypt',
   population: 245
}]
cities.sort(function(a, b){ // comparing two elements of the array cities
   if(a.city.toLowerCase() > b.city.toLowerCase()){
      return -1;
   }
   if(a.city.toLowerCase() < b.city.toLowerCase()){
      return 1;
   }
   return 0;
})