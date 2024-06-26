<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Paiement_{{$payment['Ref']}}</title>
      <link rel="stylesheet" href="{{asset('/css/pdf_style.css')}}" media="all" />
   </head>

   <body>
      <header class="clearfix">
         <div id="logo">
         <img  src="{{asset('/images/'.$setting['logo'])}}">
         </div>
         <div id="company">
            <div><strong> Date: </strong>{{$payment['date']}}</div>
            <div><strong> Numéro: </strong> {{$payment['Ref']}}</div>
         </div>
         <div id="Title-heading">
           Paiement  : {{$payment['Ref']}}
         </div>
         </div>
      </header>
      <main>
         <div id="details" class="clearfix">
            <div id="client">
               <table class="table-sm">
                  <thead>
                     <tr>
                        <th class="desc">Info fournisseur</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>
                           <div><strong>Nom:</strong> {{$payment['supplier_name']}}</div>
                           <div><strong>Ice:</strong> {{$payment['supplier_ice']}}</div>
                           <div><strong>Téle:</strong> {{$payment['supplier_phone']}}</div>
                           <div><strong>Adresse:</strong> {{$payment['supplier_adr']}}</div>
                           <div><strong>Email:</strong> {{$payment['supplier_email']}}</div>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <div id="invoice">
               <table class="table-sm">
                  <thead>
                     <tr>
                        <th class="desc">Infos société</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>
                           <div id="comp">{{$setting['CompanyName']}}</div>
                           <div><strong>ICE:</strong>  {{$setting['CompanyIce']}}</div>
                           <div><strong>Adresse:</strong>  {{$setting['CompanyAdress']}}</div>
                           <div><strong>Téle:</strong>  {{$setting['CompanyPhone']}}</div>
                           <div><strong>Email:</strong>  {{$setting['email']}}</div>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div id="details_inv">
            <table class="table-sm">
               <thead>
                  <tr>
                     <th>Retour</th>
                     <th>Payé par</th>
                     <th>Montant</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>{{$payment['return_Ref']}}</td>
                     <td>{{$payment['Reglement']}}</td>
                     <td>{{$symbol}} {{$payment['montant']}} </td>
                  </tr>
               </tbody>
            </table>
         </div>

         <div id="signature">
            @if($setting['is_invoice_footer'] && $setting['invoice_footer'] !==null)
               <p>{{$setting['invoice_footer']}}</p>
            @endif
         </div>
      </main>
   </body>
</html>
