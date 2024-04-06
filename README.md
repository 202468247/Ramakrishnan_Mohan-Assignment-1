Structure of components organized:

Features:

    -	Users Login
    
    -	list of Users
            - name
            - password
            - email address
            - Phone number

    -	menu showing links to the following:
            - Service & Deals
            - About
            - Contact
            - Social Media Links: FB, Insta, Twitter
    
    -	User Login
    
            - Props:
               - Username
               - Password
            - State
              - Login message
            
     -  Children components
     
         - Users (contains all the users)
             - Props:
                  - Array of names of users contains Name, User type, Username, Password, Email, Phone
             - State:
                  - None
             - Children
                  - Validation
                        - props:
                            - Email
                            - Password
                        - State:
                            - None
