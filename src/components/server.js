import { createServer } from 'miragejs';

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
    // createServer({
    //     routes() {
    //       this.get(
    //         "/api/people",
    //         () => ({
    //           return {
    //             people: [
    //                 {value: "Somestring", id: 5654, status: false},
    //                 {value: "Somestring2", id: 5654, status: false},
    //                 {value: "Somestring3", id: 56354, status: true}
    //             ]
    //           };
    //         }),
    //       );
    
      
    //     }
    //   });


    createServer({
      routes() {
        this.get("/api/reminders", () => ({
          reminders: [
            { id: 1, text: "Walk the dog" },
            { id: 2, text: "Take out the trash" },
            { id: 3, text: "Work out" },
          ],
        }))
      },
    })
}

