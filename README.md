# numbers_to_words_api
NodeJs API converts numeric currency into words (INR)

## Execution

Step 1 :-

     For dev : npm run dev

     For build : npm run prod

Step 2 :-

     Make a GET request to following url
     http://localhost:5000/get_api_key
     You will get a token in response.

Step 3 :-

     Make a POST request to
     http://localhost:5000/to_words
     with token in body.

     Example Body :
     {
          "number":236482343,
          "token":"eyJhbGciOiJIUzI1NiJ9.ZGpnaGhoaHV1d2l3dWV3aWV1d2lldXJpd3U.EG5jX0Q5riihDkn7a0n_jFQ5Ca842qpUEsy8xMoGoq4"
     }

     You will receive following in response :
     {
          "success": true,
          "words": "Twenty Three Crore Sixty Four Lakh Eighty Two Thousand Three Hundred Forty Three Rupees"
     }