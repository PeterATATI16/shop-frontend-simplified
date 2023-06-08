export default {
    data: () => ({
      date: '',
      time: '',
      year: '',
      timestamp: '',
      fulldatetime: '',
      currentTime: ''
    }),
    methods: {
      printDate: function () {
        return new Date().toLocaleDateString();
      },
      printTime: function () {
        return new Date().toLocaleTimeString();
      },
      printYear: function () {
        return new Date().getFullYear();
      },          
      printTimestamp: function () {
        return Date.now();
      },
      printFullDate: function(){
        return new Date();
      }
    },
    mounted: function () {
      this.date = this.printDate();
      this.time = this.printTime();
      this.timestamp = this.printTimestamp();
      this.year = this.printYear();
      this.fulldatetime = this.printFullDate();

      setInterval(() => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        this.currentTime = `${hours}:${minutes}:${seconds}`;
      }, 1000);
      
    },
};