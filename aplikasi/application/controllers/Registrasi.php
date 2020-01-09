<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Registrasi extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		// $this->load->model('m_auth');	
	}
	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcomes
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->model('m_auth');	
		$data=array(
            'username'=>$this->input->post('name'),
            'email'=>$this->input->post('email'),
            'password'=>password_hash($this->input->post('pass'),PASSWORD_DEFAULT)
        );
        if($this->m_auth->insertData($data)){
			redirect('main');
		}else{
			redirect('main/signup');
		};

	}
	
}
