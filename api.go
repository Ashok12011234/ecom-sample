package main

import (
	"log"
	"net/http"
	"encoding/json"
	"strings"
	"fmt"
 )

 type order struct {
	Name  string `json:"Name"`
	Qty   string `json:"Qty"`
	Price string `json:"Price"`
}

type cart struct {
	Orders []*order `json:"Orders"`
}

func main()  {

	 //handle /authorized route
	 http.HandleFunc("/cart",handlePage )
	 http.HandleFunc("/user",handleUser )

	 //listen to the port in 5000
	 err :=http.ListenAndServe(":4000",nil)

	 if err != nil {
	 	log.Println("There was an error listening on port :4000", err)
	  }
	 
}


func handlePage(writer http.ResponseWriter, request *http.Request) {
	fmt.Printf("Req: %s %s\n", request.Host, request.URL.Path) 
	line := `
Top Paw® Valentine's Day Single Dog Sweater,3,$ 14.99
Arcadia Trail™ Dog Windbreaker,4,$ 29.99
`
	var Orders []*order
	for _, line := range strings.Split(line, "\n") {
		if line != "" {
			s := strings.Split(line, ",")
			Orders = append(Orders, &order{Name: s[0], Qty: s[1], Price: s[2]})
		}
	}

	p, _ := json.Marshal(cart{Orders: Orders})
	

	header := request.Header.Get("Authorization")
	
	
	 if (header != "") {
	 	writer.Write([]byte(p))
	 } else {
		writer.WriteHeader(http.StatusUnauthorized)
	 		_, err2 := writer.Write([]byte("You're Unauthorized because you have no token"))
	 		if err2 != nil {
	 			return
	 		}
	 }

}

func handleUser(writer http.ResponseWriter, request *http.Request) {
	header := request.Header.Get("Cookie")

	_, err2 := writer.Write([]byte(header))
	if err2 != nil {
		return
	}

}