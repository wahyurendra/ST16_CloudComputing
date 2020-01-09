<?php
defined('BASEPATH') or exit('No direct script access allowed');

class M_auth extends CI_Model
{

	public function __construct()
	{
        $this->load->database();
        
	}
	public function insertData($data)
	{
		$this->db->insert('akun', $data);
		if ($this->db->affected_rows() > 0) {
			return true;
		} else {
			return false;
		}
	}
	
	public function login($username,$password){
		$query = $this->db->select('username,email,password')->where('email',$username)->get('akun');
		if($this->db->affected_rows()>0){
			$akun = $query->row();
			// die($password);
			if(password_verify($password,$akun->password)){
				$this->session->set_userdata('login',true);
				redirect('aplikasi');
			}else{
				die('password salah');
			}
		}
	}
    

}
