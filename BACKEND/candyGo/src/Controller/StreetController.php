<?php

namespace App\Controller;

use App\Entity\Street;
use App\Repository\StreetRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use GuzzleHttp\Client;

class StreetController extends AbstractController
{
    /**
     * @Route("/street", name="street")
     */
    public function index()
    {
        // Request Doctrine
        $repository = $this->getDoctrine()->getRepository(Street::class);
        $streets = $repository->findAll();

        $streetToEncode = [];
        foreach ($streets as $street) {
            $streetToEncode[] = $street->getPositions();
        }

        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', '*');

        return $response = $this->json($streetToEncode);
    }

    /**
     * @throws
     * @Route("/localisation", name="localisation")
     */
    public function localisation()
    {
        $client = new Client([
                'base_uri' => 'https://api-adresse.data.gouv.fr/reverse/',
            ]
        );

        $search = '?lon=3.060897&lat=50.62944&type=street';

        // Send a request
        $response = $client->request('GET', $search );

        // Create Response
        $body = $response->getBody();
        $location = $body->getContents();

        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', '*');

        // Response conversion to json
        return $response = $this->json($location);

    }
}
