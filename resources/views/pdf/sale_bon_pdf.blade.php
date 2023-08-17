<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Bon _{{$sale['Ref']}}</title>
      <link rel="stylesheet" href="{{asset('/css/pdf_bon_style.css')}}" media="all" />
   </head>

   <body>
      <header class="clearfix">
         <div id="logo">
         <img src="{{asset('/images/'.$setting['logo'])}}">
         </div>
         <div id="company">
            <div><strong> Date: </strong>{{$sale['date']}}</div>
            <div><strong> Numéro: </strong> {{$sale['Ref']}}</div>
         </div>
         <div id="Title-heading">
           Bon de livraison  : {{$sale['Ref']}}
         </div>
        
           
         </div>
         

      </header>
      <h3 style="text-align:center; margin :0;padding:0">SOCIETE KACIMI BUSINESS</h3>
      <h6 style="text-align:center; margin :0;padding:0">1324 BIR RAMI SUD MAGASIN KENITRA</h6>
      <h4 style="text-align:center; margin :0;padding:0">05 37 33 70 70</h4>
      <main style="margin-top:30px">
         <div id="details" class="clearfix">
            <div id="client">
               <table class="table">
                  <thead>
                     
                  </thead>
                  <tbody>
                     <tr>
                         <td>
                           <div>Date :</div>
                           <div> Vente :</div>
                           <div> Client :</div>
                          
                           
                        </td>
                        <td>
                           <div>{{$sale['date']}}</div>
                           <div>{{$sale['Ref']}}</div>
                           <div>{{$sale['client_name']}}</div>
                       
                           
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
            
         </div>
         <div id="details_inv">
            <table  class="table-sm">
               <thead>
                  <tr>
                     <th>PRODUIT</th>
                      <th>QUANTITE</th>
                     <th>PRIX UNITAIRE</th>
                     <th>TOTAL</th>
                  </tr>
               </thead>
               <tbody>
                  @foreach ($details as $detail)
                  <tr>
                     <td>
                        <span>{{$detail['code']}} ({{$detail['name']}})</span>
                           @if($detail['is_imei'] && $detail['imei_number'] !==null)
                              <p>IMEI/SN : {{$detail['imei_number']}}</p>
                           @endif
                     </td>
                     <td>{{$detail['quantity']}}/{{$detail['unitSale']}}</td>
                     <td>{{$detail['price']}} </td>
                     <td>{{$detail['total']}} </td>
                  </tr>
                  @endforeach
               </tbody>
            </table>
         </div>
         <div id="total">
            <table>
               
               <tr>
                  <td>Total</td>
                  <td>{{$symbol}} {{$sale['GrandTotal']}} </td>
               </tr>
              
            </table>
         </div>
        
         <div id="signature">
           
           <h4 > Patente : 206 02 963 - RC: 51087 </h4>
           <h4 > CNSS : 1186533 - IF: 33598701 </h4>
           <h4 > ICE : 002198494000006</h4>
              
         </div>
      </main>
   </body>
</html>
