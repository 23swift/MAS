(function () {

    'use strict';

    angular
        .module('mas')
        .factory('branchFrmFactory', branchFrmFactory);

    function branchFrmFactory() {
        function getBranchFrm() {
            var branchFields = [
                {
                    type: 'input',
                    key: 'branchNo',
                    templateOptions: {
                        label: 'Branch Number',
                        required: true

                    }

                },
                {
                    type: 'input',
                    key: 'branchName',
                    templateOptions: {
                        label: 'Branch Name',
                        required: true

                    }

                }, {
                    type: 'input',
                    key: 'dbaName',
                    templateOptions: {
                        label: 'DBA Name',
                        required: true

                    }

                }, {
                    className: 'row',
                    fieldGroup: [
                        {
                            className: 'col-xs-4',
                            type: 'input',
                            key: 'street',
                            templateOptions: {
                                label: 'Floor/BLDG/Street/BRGY/',
                                required: true
                            }
                        },
                        {
                            className: 'col-xs-4',
                            type: 'select',
                            key: 'city',
                            templateOptions: {

                                label: 'City',
                                required: true,
                                options: [
                                    {
                                        'name': 'Manila', 'value': '1'
                                    },
                                    {
                                        'name': 'Makati', 'value': '2'
                                    },
                                    {
                                        'name': 'Quezon City', 'value': '3'
                                    }

                                ]
                            }

                        },
                        
                        {
                            className: 'col-xs-4',
                            type: 'select',
                            key: 'zipCode',
                            templateOptions: {

                                label: 'Zip Code',
                                required: true,
                                options: [
                                    {
                                        'name': '2001', 'value': '1'
                                    },
                                    {
                                        'name': '2002', 'value': '2'
                                    },
                                    {
                                        'name': '2003', 'value': '3'
                                    }

                                ]
                            }

                        }
                    ]
                },{
                    className: 'row',
                    fieldGroup: [
                        {   className: 'col-xs-4',
                            type: 'select',
                            key: 'areMallCode',
                            templateOptions: {

                                label: 'Area Mall Code',
                                required: true,
                                options: [
                                    {
                                        'name': 'Manila', 'value': '1'
                                    },
                                    {
                                        'name': 'Makati', 'value': '2'
                                    },
                                    {
                                        'name': 'Quezon City', 'value': '3'
                                    }

                                ]
                            }

                        },
                        {
                          className: 'col-xs-4',
                            type: 'select',
                            key: 'classCode',
                            templateOptions: {

                                label: 'Class Code',
                                required: true,
                                options: [
                                    {
                                        'name': 'Manila', 'value': '1'
                                    },
                                    {
                                        'name': 'Makati', 'value': '2'
                                    },
                                    {
                                        'name': 'Quezon City', 'value': '3'
                                    }

                                ]
                            }

                        },{
                            className: 'col-xs-4',
                            type: 'select',
                            key: 'saleSlipHandling',
                            templateOptions: {

                                label: 'Sale Slip Handling',
                                required: true,
                                options: [
                                    {
                                        'name': 'Manila', 'value': '1'
                                    },
                                    {
                                        'name': 'Makati', 'value': '2'
                                    },
                                    {
                                        'name': 'Quezon City', 'value': '3'
                                    }

                                ]
                            }

                        }
                    ]
                },{
                    className: 'row',
                    fieldGroup: [
                             {
                            className: 'col-xs-6',
                            type: 'input',
                            key: 'payDelay',
                            templateOptions: {
                                label: 'Pay Delay',
                                required: true
                            }
                        },
                         {
                            className: 'col-xs-6',
                            type: 'input',
                            key: 'midCap',
                            templateOptions: {
                                label: 'Mid Cap',
                                required: true
                            }
                        }



                    ]
                
            }

            ];

            return branchFields;
        }

        return {
            getBranchFrm: getBranchFrm
        }
    }

})();