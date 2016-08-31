(function(){

    'use strict';

    angular
        .module('mas')
        .factory('dropDown', dropDown);
        
        function dropDown() {
            function getCities() {
                return [

                    {
                        'name':'Manila','value':'1'
                    },
                    {
                        'name':'Makati','value':'2'
                     },
                     {
                        'name':'Quezon City','value':'3'
                     }
                ];
            }

            function getZipCodes() {
                return [

        
                          {
                                    'name':'Manila','value':'1'
                            },
                            {
                                    'name':'Makati','value':'2'
                            },
                            {
                                    'name':'Quezon City','value':'3'
                            }
                ];
            }

            function getAoCodes() {
                return [
                                    {
                                        'name':'a00001','value':'1'
                                },
                                {
                                        'name':'a00002','value':'2'
                                },{
                                        'name':'a00003','value':'3'
                                }
                            ];
            }

            function getOwnership() {
                return [
                              {
                                        'name':'Single Propreitorship','value':'1'
                                },
                                {
                                        'name':'Corporation','value':'2'
                                },{
                                        'name':'Partnership','value':'3'
                                }

                          ];
            }
            return {
                getCities: getCities,
                getZipCodes:getZipCodes,
                getAoCodes:getAoCodes,
                getOwnership:getOwnership

            }
        }
        
})();