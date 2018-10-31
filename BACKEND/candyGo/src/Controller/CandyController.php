<?php

namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\CandyRepository;
use App\Entity\Candy;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use GuzzleHttp\Client;
//use GuzzleHttp\json_decode;
class CandyController extends AbstractController
{
    /**
     * @Route("/searchCandy", name="searchCandy")
     * @throws
     */
    public function searchCandy()
    {

        $candies = null;
        $randomPage = rand(1, 50);
        $randomCandies = rand(8, 14);

        for ($i = 1; $i <= 2; $i++) {
            $randomPage++;
            $candies = [];

            $json_source = file_get_contents("https://ssl-api.openfoodfacts.org/category/candies/$randomPage.json");
            $json_data = json_decode($json_source);
            $products = $json_data->products;

            for ($j = 0; $j < $randomCandies; $j++) {
                if (!empty($products[$j]->product_name))
                    $candies[$products[$j]->product_name] = $products[$j]->id;
            }
        }
        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response = $this->json($candies);
    }
}




