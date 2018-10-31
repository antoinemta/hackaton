<?php

namespace App\Controller;

use App\Entity\Street;
use App\Repository\StreetRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class StreetController extends AbstractController
{
    /**
     * @Route("/street", name="street")
     */
    public function index()
    {
        // Request Doctrine
        $repository = $this->getDoctrine()->getRepository(Street::class);
        $street = $repository->findAll();

        // Create Response
        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', '*');

        // Response conversion to json
        return $response = $this->json($street);

    }
}
