<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('m_auth');	
	}

	public function index()
	{
		if ($this->session->userdata('login') == true) {
			redirect('aplikasi');
		} else {
			$this->load->view('v_login');
		}
	}

	public function login(){
		
		$username = $this->input->post('username');
		$pass = $this->input->post('pass');
		$this->m_auth->login($username,$pass);
		
	}
	
}
