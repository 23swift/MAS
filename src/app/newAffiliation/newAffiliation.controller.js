(function () {
  'use strict';

  angular
    .module('mas')
    .controller('newAffiliationController', newAffilation);

  //newAffilation.$inject = ['dependencies'];

  /* @ngInject */
  function newAffilation(dropDown, branchFrmFactory, formlyConfig, formlyValidationMessages) {
    var vm = this;
    vm.title = 'New Affilation';
    vm.user = {};
    vm.onSubmit = function () {

      alert('success!');
    };


    formlyConfig.setWrapper({
      name: 'fomrlyMessages',
      templateUrl: 'formly-messages.html',
      types: ['input', 'select']

    });

    formlyValidationMessages.addStringMessage('email', 'invalid Email');
    formlyValidationMessages.messages.required = 'to.label + " is required"';

          vm.mccList = 
          [
            {
            "MCC":"5421","branches":[
                    {
                      "branchNo": "000001",
                      "branchName": "Bench",
                      "Address": "Manila"
                    },
                    {
                      "branchNo": "000002",
                      "branchName": "Nike",
                      "Address": "Manila"

                    }
               ]
            },
            {
            "MCC":"5422","branches":[
                    {
                      "branchNo": "000001",
                      "branchName": "Bench",
                      "Address": "Manila"
                    },
                    {
                      "branchNo": "000002",
                      "branchName": "Nike",
                      "Address": "Manila"

                    }
               ]
            }
          ];
    vm.branchFields = branchFrmFactory.getBranchFrm();
    vm.branchModel = {};




    vm.requestHeaderfields = [

      {
        className: 'row no-gutter',
        fieldGroup: [
          {
            className: 'col-xs-6',
            type: 'select',
            key: 'aoCode',
            templateOptions: {

              label: 'AO',
              required: true,
              options: dropDown.getAoCodes()
            }
          }
        ]
      },

      {


        className: 'row no-gutter',
        fieldGroup: [
          {
            className: 'col-xs-6',
            type: 'input',
            key: 'firstName',
            templateOptions: {
              label: 'Business Name',
              required: true
            }
          },
          {
            className: 'col-xs-6',
            type: 'select',
            key: 'lastName',
            templateOptions: {
              label: 'Ownership',
              required: true,
              options: dropDown.getOwnership()
            }
            // expressionProperties: {
            //   'templateOptions.disabled': '!model.firstName'
            // }
          }
        ]
      },
      {
        className: 'row no-gutter',
        fieldGroup: [
          {
            className: 'col-xs-4',
            type: 'input',
            key: 'street',
            templateOptions: {
              label: 'Floor/BLDG/Street/BRGY/',
              required:true
            }
          },
          {
            className: 'col-xs-4',
            type: 'select',
            key: 'city',
            templateOptions: {

              label: 'City',
              required: true,
              options: dropDown.getCities()
            }

          },
          {
            className: 'col-xs-4',
            type: 'select',
            key: 'zipCode',
            templateOptions: {

              label: 'Zip Code',
              required: true,
              options: dropDown.getZipCodes()
            }

          }
        ]
      },


      {
        type: 'input',
        key: 'eMail',
        templateOptions: {

          label: 'E-Mail',
          required: true,
          type: 'email'

        }

      }
      // ,
      // {
      //     type:'input',
      //     key:'confirmEmail',
      //      templateOptions:{

      //         label:'Confirm E-Mail',
      //         required:true
      //     },
      //     validators:{

      //         betterMatches:{

      //             expression:'$viewValue === model.eMail',
      //             message:'$viewValue + " is not equal to " + model.eMail'
      //         }
      //     }

      // }
    ];

    activate();

    ////////////////

    function activate() {
      $('#requestTabs a').click(function (e) {
        e.preventDefault();
       
        // if(!$(this).hasClass('disabled')){
        //    // $(this  + ' a').tab('show');

        // }
        

      });
    }
  }
})();